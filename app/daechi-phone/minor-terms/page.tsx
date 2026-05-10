import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getMinorTermsParts } from "@/lib/legalDocumentParts";
import { minorTermsTitle } from "@/lib/daechiPhonePolicies";

export default function MinorTermsPage() {
  return <LegalDocumentPage title={minorTermsTitle} parts={getMinorTermsParts()} />;
}
