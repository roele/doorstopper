import { showFailureToast } from "@raycast/utils";
import { startDoorstopper } from "./util";

export default async function main() {
  try {
    await startDoorstopper({ menubar: true, status: true }, "Doorstopper is now enabled");
  } catch (error) {
    showFailureToast("Failed to enable Doorstopper", { message: String(error) });
  }
}
