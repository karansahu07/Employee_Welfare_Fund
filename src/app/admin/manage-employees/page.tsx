"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Pencil } from "lucide-react"
import { useEffect } from "react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample employee data
const employees = [
  {
    id: "1",
    name: "Rahul Sharma",
    status: "Paid",
    date: "2025-04-15",
    time: "10:30 AM",
  },
  {
    id: "2",
    name: "Priya Patel",
    status: "Not Paid",
    date: "2025-04-10",
    time: "09:15 AM",
  },
  {
    id: "3",
    name: "John",
    status: "Paid",
    date: "2025-04-05",
    time: "11:45 AM",
  },
  {
    id: "4",
    name: "Sandeep",
    status: "Paid",
    date: "2025-04-01",
    time: "02:30 PM",
  },
  {
    id: "5",
    name: "Harsh",
    status: "Not Paid",
    date: "2025-03-28",
    time: "03:45 PM",
  },
  {
    id: "6",
    name: " Ajay",
    status: "Paid",
    date: "2025-03-25",
    time: "10:00 AM",
  },
  {
    id: "7",
    name: "Chirag",
    status: "Not Paid",
    date: "2025-03-20",
    time: "01:15 PM",
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const [monthValue, setMonthValue] = useState("");
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // pad with 0
    setMonthValue(`${year}-${month}`); // format: "YYYY-MM"
  }, []);
  return (
    <div className="flex-1 space-y-4">
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manage Employees</h2>
        <input
      type="month"
      value={monthValue}
      onChange={(e) => setMonthValue(e.target.value)}
      className="rounded border-2 border-gray-300 dark:border-gray-500 p-2"
    />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-full max-w-sm">
          {/* <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id} className={employee.status==="Paid"?"bg-green-100 dark:bg-gray-800":"bg-red-100 dark:bg-gray-800"}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  <Badge variant={employee.status === "Paid" ? "default" : "destructive"}>{employee.status}</Badge>
                </TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.time}</TableCell>
                <TableCell className="text-right">
                  <div className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4">
                    <div className="flex items-center text-black-600  text-sm"><Eye className="mr-2 h-4 w-4" /> View</div>
                    <div className="flex items-center text-gray-600 hover:text-gray-900 text-sm"> <Pencil className="mr-2 h-4 w-4" /><a href="/admin/add-employee" className="dark:text-white">Edit</a></div>
                  </div>
                  {/* <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                                    <button className="flex items-center text-blue-600 hover:text-blue-900 text-sm">
                                      <Eye className="w-4 h-4 mr-1" /> View
                                    </button>
                                    <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
                                      <Pencil className="w-4 h-4 mr-1" /> <a href="/admin/add-employee">Edit</a>
                                    </button>
                                  </td> */}
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Employee
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  )
}