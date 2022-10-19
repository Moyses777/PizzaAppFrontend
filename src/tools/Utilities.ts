import AWN, { AwnOptions } from "awesome-notifications";

/**
 * This class Notifications will do actions to send notifications from
 * awesome-notifications, you can create new methods or conditions to
 * send a notification.
 */
export class Notifications {
  /**
   * This method shows a notification for loggin or register an user
   * that will show if has a success log or register and also this
   * method will show you if has failed the connnection
   *
   * @remarks
   * The API should return a true or false if has done succesfully the job
   *
   * @param notification Promise<Response>
   * @param successMsg string
   * @param errorMsg string
   * @returns resp : any
   *
   * @beta
   */
  public static async ShowSessionLoadingMessage(
    notification: Promise<Response>,
    successMsg: string,
    errorMsg: string
  ) {
    let resp: any;
    const notifications = new AWN();
    const resultFetch = new Promise((resolve: any, reject: any) => {
      notification
        .then(async (response: any) => {
          resp = await response.json();
          if (resp == true) resolve(successMsg);
          else reject(errorMsg);
        })
        .catch((err) => reject("Hubo algun fallo en la conexion " + err));
    });
    await notifications.asyncBlock(resultFetch, successMsg);

    return resp;
  }
}
