import React from "react";
import {
  AiFillHome,
  MdLocalFireDepartment,
  CgMusicNote,
  FiFilm,
  MdLiveTv,
  IoGameControllerSharp,
  ImNewspaper,
  GiDiamondTrophy,
  RiLightbulbLine,
  GiEclipse,
  FiSettings,
  AiOutlineFlag,
  FiHelpCircle,
  RiFeedbackLine,
} from "./fileIcon";

export const categories = [
  { name: "New", icon: <AiFillHome size={20} />, type: "home" },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment size={20} />,
    type: "category",
  },
  { name: "Music", icon: <CgMusicNote size={20} />, type: "category" },
  { name: "Films", icon: <FiFilm size={20} />, type: "category" },
  { name: "Live", icon: <MdLiveTv size={20} />, type: "category" },
  {
    name: "Gaming",
    icon: <IoGameControllerSharp size={20} />,
    type: "category",
  },
  { name: "News", icon: <ImNewspaper size={20} />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy size={20} />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine size={20} />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse size={20} />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings size={20} />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag size={20} />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle size={20} />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine size={20} />, type: "menu" },
];
