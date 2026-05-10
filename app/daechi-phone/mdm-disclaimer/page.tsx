import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getMdmDisclaimerParts } from "@/lib/legalDocumentParts";
import { mdmDisclaimerTitle } from "@/lib/daechiPhonePolicies";

export default function MdmDisclaimerPage() {
  return <LegalDocumentPage title={mdmDisclaimerTitle} parts={getMdmDisclaimerParts()} />;
}
