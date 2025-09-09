import bcrypt from "bcryptjs";
import { dbConnect } from "./lib/mongodb.js";   // adjust path if needed
import User from "./models/User.js";            // adjust path if needed

async function createUser() {
  await dbConnect();

  // hash a password
  const passwordHash = await bcrypt.hash("password123", 10);

  // create user
  const user = await User.create({
    name: "Test User",
    email: "test@example.com",
    passwordHash,
    role: "user"
  });

  console.log(" Test user created:", user);
  process.exit();
}

createUser();
