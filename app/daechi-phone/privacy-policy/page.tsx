import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getPrivacyPolicyParts } from "@/lib/legalDocumentParts";
import { privacyPolicyTitle } from "@/lib/daechiPhonePolicies";

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage title={privacyPolicyTitle} parts={getPrivacyPolicyParts()} />;
}
