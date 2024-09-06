// import { db } from "@/lib/db";
import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddCartoon() {
  async function handleAddCartoon(formData) {
    "use server";
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    console.log("form action done");

    const username = formData.get("username");
    const favourite_cartoon = formData.get("favourite_cartoon");

    await db.query(
      `INSERT INTO cartoon (username, favourite_cartoon) VALUES ($1, $2)`,
      [username, favourite_cartoon]
    );

    // revalidate that page to ensure ALL the new candles are shown
    revalidatePath("/");
    // redirect tot he page that shows the list of candles
    redirect("/");
  }

  return (
    <div>
      <h3>Add Cartoon</h3>
      <form action={handleAddCartoon}>
        <input name="username" placeholder="username" />
        <input name="favourite cartoon" placeholder="favourite cartoon" />
        <button className="submitbutton">Submit</button>
      </form>
    </div>
  );
}
