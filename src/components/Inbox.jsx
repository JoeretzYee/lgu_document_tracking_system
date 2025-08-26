import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function Inbox() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell className="!bg-gray-700 !text-white">
              Document Name
            </TableHeadCell>
            <TableHeadCell className="!bg-gray-700 !text-white">
              From
            </TableHeadCell>
            <TableHeadCell className="!bg-gray-700 !text-white">
              Sent By
            </TableHeadCell>
            <TableHeadCell className="!bg-gray-700 !text-white">
              Date
            </TableHeadCell>
            <TableHeadCell className="!bg-gray-700 !text-white">
              Status
            </TableHeadCell>
            <TableHeadCell className="!bg-gray-700 !text-white">
              Action
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Document Test
            </TableCell>
            <TableCell>Mayors Office</TableCell>
            <TableCell>Disay</TableCell>
            <TableCell>August 08, 2025</TableCell>
            <TableCell>
              {" "}
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800">
                On going
              </span>
            </TableCell>
            <TableCell>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Received
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Document Test 2
            </TableCell>
            <TableCell>Treasury</TableCell>
            <TableCell>Ablin</TableCell>
            <TableCell>August 06, 2025</TableCell>
            <TableCell>
              {" "}
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </TableCell>
            <TableCell>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Received
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Document Test 3
            </TableCell>
            <TableCell>Assesor</TableCell>
            <TableCell>Angel</TableCell>
            <TableCell>August 05, 2025</TableCell>
            <TableCell>
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800">
                Received
              </span>
            </TableCell>
            <TableCell>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Received
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Inbox;
