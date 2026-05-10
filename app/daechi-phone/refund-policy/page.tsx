import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getRefundPolicyParts } from "@/lib/legalDocumentParts";
import { refundPolicyTitle } from "@/lib/daechiPhonePolicies";

export default function RefundPolicyPage() {
  return <LegalDocumentPage title={refundPolicyTitle} parts={getRefundPolicyParts()} />;
}
