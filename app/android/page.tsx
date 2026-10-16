import { AndroidDownload, androidMetadata } from "@/components/AndroidDownload";
import { latestVersionId } from "@/lib/versions";

export function generateMetadata() {
  return androidMetadata(latestVersionId);
}

export default function AndroidPage() {
  return <AndroidDownload versionId={latestVersionId} />;
}
