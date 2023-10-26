'use client'
import React, { useState } from "react";

const page = () => {
  const [issues, setIssues] = useState([])
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-semibold leading-6">Issues</h2>
      </div>
    
      <div>
        {!issues.length ? (
          ''
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="border-b border-gray-700 border-opacity-70">
                <tr className="text-left">
                  <th className="p-3 text-sm">Name</th>
                  <th className="p-3 text-sm">Creator</th>
                  <th className="p-3 text-sm">Created</th>
                  <th className="p-3 text-sm">Modified</th>
                  <th className="p-3 text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => {
                  console.log(issue);
                  return (
                    <tr
                      className="border-b border-opacity-20 border-gray-700 cursor-pointer hover:bg-gray-100"
                      key={issue.id}
                    >
                      <td className="p-3">
                        <p className="text-sm font-semibold">{issue.name}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.creator}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.created}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.modified}</p>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">Edit</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
