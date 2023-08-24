import {
  Configuration,
  EmailsApi,
  EmailMessageData,
  BodyPart,
  BodyContentType,
} from "@elasticemail/elasticemail-client-ts-axios";
import ejs from "ejs";
import path from 'path';
import dotenv from "dotenv";

dotenv.config();

const config = new Configuration({
  apiKey: process.env.EMAIL_API_KEY,
});

const emailsApi = new EmailsApi(config);
const appRoot = process.cwd();

export const sendEmail = async (email: string, verifyLink: string,templateEmail:string,subject:string,code?:string) => {
  const emailTemplatePath = path.join(appRoot,'src', 'views', templateEmail);
  // Render the EJS template with the recipient's name
  const emailContent = await ejs.renderFile(emailTemplatePath, { verifyLink ,code});
  const emailMessageData: EmailMessageData = {
    Recipients: [
      {
        Email: email,
        Fields: {
          name: email.substring(0, email.indexOf("@")) || "name",
        },
      },
    ],
    Content: {
      Body: [
        {
          ContentType: BodyContentType.Html,
          Charset: "utf-8",
          Content: emailContent,
        },
      ],
      From: "GameSell <contact@gamesell.store>",
      Subject: subject || "GameSell",
    },
  };

  const sendBulkEmails = (emailMessageData: EmailMessageData): void => {
    emailsApi
      .emailsPost(emailMessageData)
      .then((response) => {
        console.log("API called successfully.");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  sendBulkEmails(emailMessageData);
};
function fileURLToPath(url: string) {
  throw new Error("Function not implemented.");
}

