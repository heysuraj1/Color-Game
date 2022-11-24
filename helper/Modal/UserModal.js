import mongoose from "mongoose";

const UserModal = mongoose.Schema(
  {
    Name: {
      default: "null",
      type: "String",
    },

    Email: {
      default: "null",
      type: "String",
    },
    ContactNumber: {
      default: "null",
      type: "String",
    },
    SponserCode: {
      default: "null",
      type: "String",
    },
    UpperLineSponserUser: {
      default: "null",
      type: "String",
    },
    Password: {
      default: "null",
      type: "String",
    },
    Country: {
      default: "null",
      type: "String",
    },
    Gender: {
      default: "null",
      type: "String",
    },
    MyReferId: {
      default: "null",
      type: "String",
    },
    Wallete: {
      default: "null",
      type: "String",
    },
    UserIP: {
      default: "null",
      type: "String",
    },
    PedometerAccess: {
      default: "false",
      type: "String",
    },
    RechargeWallete: {
      default: "500",
      type: "String",
    },
  },
  
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", UserModal);
