import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(request: Request) {
  if (!DATABASE_ID || !process.env.NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion 설정이 되어 있지 않습니다. NOTION_API_KEY, NOTION_DATABASE_ID를 확인하세요." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      name = "",
      grade = "",
      phone = "",
      channel = "",
      devices = "",
      concerns = "",
      preferredTime = "",
      referrer = "",
      setting = "",
      settingBOptions = "",
      applicationType = "",
      desiredDevice = ""
    } = body;

    const channelMap: Record<string, string> = {
      kakao: "카카오톡",
      phone: "전화 통화",
      etc: "기타"
    };
    const channelLabel = channelMap[channel] ?? (channel || "미선택");

    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name || "(이름 없음)" } }]
        },
        Grade: {
          rich_text: [{ text: { content: grade } }]
        },
        Phone: {
          rich_text: [{ text: { content: phone } }]
        },
        Channel: {
          select: { name: channelLabel }
        },
        Devices: {
          rich_text: [{ text: { content: devices } }]
        },
        Concerns: {
          rich_text: [{ text: { content: concerns } }]
        },
        PreferredTime: {
          rich_text: [{ text: { content: preferredTime } }]
        },
        ...(referrer
          ? {
              Referrer: {
                rich_text: [{ text: { content: referrer } }]
              }
            }
          : {}),
        ...(setting
          ? {
              Setting: {
                rich_text: [{ text: { content: setting } }]
              }
            }
          : {}),
        ...(settingBOptions
          ? {
              SettingBOptions: {
                rich_text: [{ text: { content: settingBOptions } }]
              }
            }
          : {}),
        ...(applicationType
          ? {
              ApplicationType: {
                rich_text: [{ text: { content: applicationType } }]
              }
            }
          : {}),
        ...(desiredDevice
          ? {
              DesiredDevice: {
                rich_text: [{ text: { content: desiredDevice } }]
              }
            }
          : {})
      }
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Notion API error:", error);
    const err = error as { code?: string; status?: number; body?: string; message?: string };
    let userMessage = "상담 신청 저장에 실패했습니다.";
    let detail = "";

    if (err?.code === "unauthorized" || err?.status === 401) {
      userMessage = "Notion API 토큰이 올바르지 않습니다.";
      detail = ".env.local의 NOTION_API_KEY를 확인하고, Notion 연동에서 새 비밀 키를 발급해 보세요.";
    } else if (err?.status === 404 || (err as { code?: string }).code === "object_not_found") {
      userMessage = "Notion 데이터베이스를 찾을 수 없습니다.";
      detail = "NOTION_DATABASE_ID가 맞는지, 해당 DB 페이지를 연동(Integration)에 연결했는지 확인하세요.";
    } else if (err?.status === 400) {
      userMessage = "Notion DB 속성 이름이 맞지 않을 수 있습니다.";
      detail = "DB 속성 이름을 영어로 정확히: Name(제목), Grade, Phone, Channel(선택: 카카오톡/전화 통화/기타), Devices, Concerns, PreferredTime, Referrer, Setting, SettingBOptions, ApplicationType, DesiredDevice. NOTION_SETUP.md 참고.";
    } else {
      detail = error instanceof Error ? error.message : typeof err?.body === "string" ? err.body : "";
    }

    return NextResponse.json(
      { error: userMessage, detail: detail || undefined },
      { status: 500 }
    );
  }
}
