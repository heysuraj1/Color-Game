import initDB from "../../../helper/initDB";
import User from "../../../helper/Modal/UserModal";
import bcrypt from "bcrypt";


initDB();

export default async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    return res
      .status(404)
      .json({ error: "You Have Not Provided All The Informations" });
  }

  const user = await User.findOne({ Email: email });
  if (!user) {
    const userid = await User.findOne({ SponserCode: email });

    if (!userid) {
      return res.status(404).json({ error: "User Don't Exists" });
    } else {
      const doMatch = await bcrypt.compare(password, userid.Password);
      if (doMatch) {
        res.status(201).json(userid);
      } else {
        return res.status(401).json({ error: "email or password don't match" });
      }
    }
  } else {
    const doMatch = await bcrypt.compare(password, user.Password);
    if (doMatch) {
      res.status(201).json(user);
    } else {
      return res.status(401).json({ error: "email or password don't match" });
    }
  }
};