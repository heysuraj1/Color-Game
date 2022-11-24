import initDB from "../../../helper/initDB";
import User from "../../../helper/Modal/UserModal";
import bcrypt from "bcrypt";

initDB();
export default function handler(req, res) {
  if (req.method == "POST") {
    createUser(req, res);
  }

  if (req.method == "PUT") {
    UpdateUser(req, res);
  }
}

const createUser = async (req, res) => {
  const { Email,Password, Name,ContactNumber } = req.body;

  if ( !Email || !Name || !Password || !ContactNumber ) {
    return res.status(404).json({ error: "Please Provide All The Fields" });
  }

  const user = await User.findOne({ Email });
  if (user) {
    return res
      .status(422)
      .json({ error: "This user already exist please choose another one" });
  }
  const hashedPassowd = await bcrypt.hash(Password, 12);

  const ReferId = Math.floor(Math.random() * 90000) + 1000000;

  const CreateUser = await User({
    Email,
    Name,
    Password: hashedPassowd,
    SponserCode:ReferId,
    ContactNumber
  }).save();

  res.status(200).json(CreateUser);
};

const UpdateUser = async (req, res) => {
  const { oldPassword, NewPasswod, id } = req.body;

  if (!oldPassword || !NewPasswod || !id) {
    return res
      .status(404)
      .json({ message: "You Have Not Provided All The Informations" });
  }

  if (oldPassword == NewPasswod) {
    return res
      .status(404)
      .json({ message: "Both New And Old Password Is Same" });
  }

  const Uses = await User.findById({ _id: id });

  const doCompare = await bcrypt.compare(oldPassword, Uses.Password);

  if (!doCompare) {
    return res.status(404).json({ message: "Your Old Password Is Not Right" });
  } else {
    const hashedPassowd = await bcrypt.hash(NewPasswod, 12);

    await User.findByIdAndUpdate({ _id: id }, { Password: hashedPassowd });
    res.status(200).json({ message: "Your Password Is Updated" });
  }
};