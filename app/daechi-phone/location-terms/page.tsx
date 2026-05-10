import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import { getLocationTermsParts } from "@/lib/legalDocumentParts";
import { locationTermsTitle } from "@/lib/daechiPhonePolicies";

export default function LocationTermsPage() {
  return <LegalDocumentPage title={locationTermsTitle} parts={getLocationTermsParts()} />;
}
