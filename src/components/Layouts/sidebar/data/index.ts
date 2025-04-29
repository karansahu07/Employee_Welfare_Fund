import { url } from "inspector";
import * as Icons from "../icons";
import { LuIndianRupee } from "react-icons/lu";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
// import {ArrowLeftRight}  from "react-icons/lu";

import {  ArrowLeftRight} from "lucide-react"

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url : "/admin",
        icon: MdOutlineSpaceDashboard ,
        items: [],
      },
      // {
      //   title: "Calendar",
      //   url: "/calendar",
      //   icon: Icons.Calendar,
      //   items: [],
      // },
      {
        title: "Add Employee",
        url: "/admin/add-employee/",
        icon: IoPersonAddOutline ,
        items: [
         
        ],
      },
      // {
      //   title: "Profile",
      //   url: "/admin/profile/",
      //   icon: IoPersonAddOutline ,
      //   items: [
         
      //   ],
      // },
      {
        title: "Manage Employee",
        url: "/admin/manage-employees",
        icon: MdOutlineManageAccounts ,
        items: [],
      },
      {
        title: "Payment",
        url: "/user/payment",
        icon:LuIndianRupee ,
        items: [],
      },
      {
        title: "Transaction",
        url: "/admin/transaction",
        icon: ArrowLeftRight  ,
        items: [],
      },
      // {
      //   title: "Tables",
      //   url: "/tables",
      //   icon: Icons.Table,
      //   items: [
      //     {
      //       title: "Tables",
      //       url: "/tables",
      //     },
      //   ],
      // },
      // {
      //   title: "Pages",
      //   icon: Icons.Alphabet,
      //   items: [
      //     {
      //       title: "Settings",
      //       url: "/pages/settings",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   label: "OTHERS",
  //   items: [
  //     {
  //       title: "Charts",
  //       icon: Icons.PieChart,
  //       items: [
  //         {
  //           title: "Basic Chart",
  //           url: "/charts/basic-chart",
  //         },
  //       ],
  //     },
  //     {
  //       title: "UI Elements",
  //       icon: Icons.FourCircle,
  //       items: [
  //         {
  //           title: "Alerts",
  //           url: "/ui-elements/alerts",
  //         },
  //         {
  //           title: "Buttons",
  //           url: "/ui-elements/buttons",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Authentication",
  //       icon: Icons.Authentication,
  //       items: [
  //         {
  //           title: "Sign In",
  //           url: "/auth/sign-in",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
