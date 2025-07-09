import Snackbar from "react-native-snackbar";

export const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;



export function validate(text: string) {
  const formattedText = text.replace(/[^A-Za-z\s]/g, '').replace(/^\s+/, '');
  return formattedText;
}


export const ShowError = (message: string) => {
  Snackbar.show({
    text: message ? message : 'Error Occured',
    backgroundColor: 'red',
    duration: Snackbar.LENGTH_LONG,
  });
};