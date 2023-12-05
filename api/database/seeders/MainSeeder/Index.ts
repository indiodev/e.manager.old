import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Leiaute from "App/Models/Leiaute";
import User from "App/Models/User";
import Version from "App/Models/Version";

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run() {
    const users = await User.query();
    const leiautes = await Leiaute.query();
    const versions = await Version.query();

    if (users.length === 0) {
      await this.runSeeder(await import("../User"));
    }

    if (leiautes.length === 0) {
      await this.runSeeder(await import("../Leiaute"));
    }

    if (versions.length === 0) {
      await this.runSeeder(await import("../Version"));
    }

    // await this.runSeeder(await import("../LeiauteBuilder"));
  }
}
