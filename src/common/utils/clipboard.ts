export const clipboard = {
  set: async (text: string) => {
    // Copy the text inside the text field
    await navigator.clipboard.writeText(text);

    // Alert the copied text
    alert('Copied: ' + text);
  },
};
