import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getServiceTermsParts } from "@/lib/legalDocumentParts";
import { serviceTermsTitle } from "@/lib/daechiPhonePolicies";

export default function ServiceTermsPage() {
  return <LegalDocumentPage title={serviceTermsTitle} parts={getServiceTermsParts()} />;
}
