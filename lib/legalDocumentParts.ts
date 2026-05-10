import {
  locationTermsContent,
  mdmDisclaimerContent,
  minorTermsContent,
  privacyPolicyContent,
  refundPolicyContent,
  serviceTermsContent
} from "@/lib/daechiPhonePolicies";
import {
  type LegalDocumentPart,
  type LegalTableSpec,
  splitContentWithTables
} from "@/lib/splitLegalContentWithTables";

const mdmDisclaimerTables: LegalTableSpec[] = [
  { anchor: "명시적으로 고지합니다.\n\n", rowCount: 6, colCount: 3 }
];

const refundPolicyTables: LegalTableSpec[] = [
  { anchor: "제2조 (이용료의 구성)\n", rowCount: 7, colCount: 3 },
  {
    anchor: "(1) 신규 가입 패키지(3개월 약정, 149,000원) 해지 시\n",
    rowCount: 7,
    colCount: 4
  },
  { anchor: "(2) 4개월차 이후 자동결제분 해지 시\n", rowCount: 4, colCount: 2 },
  { anchor: "(3) 회사 귀책사유에 따른 환불\n", rowCount: 4, colCount: 2 }
];

const locationTermsTables: LegalTableSpec[] = [
  {
    anchor:
      "위치기반서비스사업자(해당하는 경우)로서 다음의 위치기반서비스를 제공합니다.\n\n",
    rowCount: 5,
    colCount: 2
  },
  {
    anchor: "학생회원의 정밀 위치정보를 다음의 기간 동안만 보유합니다.\n\n",
    rowCount: 4,
    colCount: 2
  },
  {
    anchor:
      "② 위치정보 이용·제공 사실 확인자료: 「위치정보법」 제16조 제2항에 따라 다음 항목을 6개월 이상 보관합니다.\n\n",
    rowCount: 4,
    colCount: 3
  },
  { anchor: "① 회사의 위치정보관리책임자는 다음과 같습니다.\n\n", rowCount: 6, colCount: 2 },
  { anchor: "제11조 (사업자 정보)\n", rowCount: 10, colCount: 2 }
];

const serviceTermsTables: LegalTableSpec[] = [
  {
    anchor: "회사가 제공하는 서비스의 구체적 내용은 다음과 같습니다.\n\n",
    rowCount: 10,
    colCount: 3
  },
  { anchor: "② 요금표\n\n", rowCount: 7, colCount: 3 },
  {
    anchor: "(1) 신규 가입 패키지(3개월 약정, 149,000원) 해지 시\n",
    rowCount: 4,
    colCount: 4
  },
  { anchor: "(2) 4개월차 이후 매월 자동결제 분 해지 시\n", rowCount: 3, colCount: 2 },
  {
    anchor: "(3) 회사 귀책 또는 학부모회원의 책임 없는 사유\n",
    rowCount: 4,
    colCount: 2
  },
  {
    anchor: "(4) 학생·학부모 귀책으로 회사가 해지한 경우 — 환불 불가\n",
    rowCount: 4,
    colCount: 2
  }
];

const privacyPolicyTables: LegalTableSpec[] = [
  { anchor: "이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.\n\n", rowCount: 6, colCount: 2 },
  { anchor: "다음과 같이 파단된 동의를 받습니다.\n\n", rowCount: 8, colCount: 3 },
  { anchor: "① 학부모회원\n", rowCount: 4, colCount: 3 },
  { anchor: "② 학생회원\n", rowCount: 6, colCount: 3 },
  { anchor: "① 일반 개인정보의 보유기간\n", rowCount: 10, colCount: 3 },
  { anchor: "② 가명정보의 처리 및 보유기간 (선택 동의 시에 한함)\n", rowCount: 6, colCount: 3 },
  {
    anchor:
      "회사가 제휴기관(예: 팡스카이 학원)을 통해 서비스를 제공하는 경우, 다음 정보를 제휴기관에 제공할 수 있습니다.\n\n",
    rowCount: 2,
    colCount: 4
  },
  { anchor: "회사는 원활한 서비스 제공을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.\n\n", rowCount: 7, colCount: 3 },
  { anchor: "회사는 다음과 같이 개인정보를 국외로 이전하고 있습니다.\n\n", rowCount: 4, colCount: 5 },
  { anchor: "회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.\n\n", rowCount: 3, colCount: 2 },
  {
    anchor:
      "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n",
    rowCount: 4,
    colCount: 5
  },
  {
    anchor:
      "정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.\n\n",
    rowCount: 5,
    colCount: 3
  }
];

const minorTermsTables: LegalTableSpec[] = [
  {
    anchor: "③ 본 약관은 학생회원의 연령에 따라 다음과 같이 차등 적용됩니다.\n\n",
    rowCount: 3,
    colCount: 3
  },
  {
    anchor:
      "② 결제 항목의 사전 고지: 회사는 가입 단계에서 학부모회원에게 다음의 결제 항목을 명확히 고지하고 별도의 동의를 받습니다.\n\n",
    rowCount: 4,
    colCount: 3
  },
  {
    anchor:
      "① 학생회원이 본 서비스 이용을 종료한 경우, 회사는 학생회원의 학습 데이터를 다음과 같이 처리합니다.\n\n",
    rowCount: 7,
    colCount: 3
  }
];

export function getMdmDisclaimerParts(): LegalDocumentPart[] {
  return splitContentWithTables(mdmDisclaimerContent, mdmDisclaimerTables);
}

export function getRefundPolicyParts(): LegalDocumentPart[] {
  return splitContentWithTables(refundPolicyContent, refundPolicyTables);
}

export function getLocationTermsParts(): LegalDocumentPart[] {
  return splitContentWithTables(locationTermsContent, locationTermsTables);
}

export function getServiceTermsParts(): LegalDocumentPart[] {
  return splitContentWithTables(serviceTermsContent, serviceTermsTables);
}

export function getPrivacyPolicyParts(): LegalDocumentPart[] {
  return splitContentWithTables(privacyPolicyContent, privacyPolicyTables);
}

export function getMinorTermsParts(): LegalDocumentPart[] {
  return splitContentWithTables(minorTermsContent, minorTermsTables);
}
