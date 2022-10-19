import AWN, { AwnOptions } from "awesome-notifications";

export class Notifications {
  public static async ShowSessionLoadingMessage(
    notification: Promise<Response>
  ) {
    const notifications = new AWN();
    await notifications.asyncBlock(
      notification,
      "Se ha registrado con exito!!!",
      "Hubo algun error en el registro!!!"
    );
  }
}
