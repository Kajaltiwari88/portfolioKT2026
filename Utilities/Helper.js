import toast from "react-hot-toast";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Copied to clipboard");
      toast.success("Email copied to clipboard!", {
        duration: 2000,
        position: "top-right",
      });
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};