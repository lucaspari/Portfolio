import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
export const Timeline = () => {
  return (
    <Box p={"2em"}>
      <Text fontSize={"3xl"}>Timeline</Text>
      <Box>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 2020 - March 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fullstack Developer Internship
            </h3>
            <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
              - Developing in C# creating new features with WebForms
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              - Using MYSQL as database to store the client data.
            </p>
          </li>
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2021 - April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Web Developer Internship
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Developing Logistics systems to tax calculation systems, using
              VueJs, Huawei Cloud and MySQL
            </p>
          </li>
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022 - August 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Frontend Web Developer Jr.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Refactoring Code and focusing on unit tests with Jest to avoid
              bugs in production environment
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2022 - October 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Frontend Web Developer.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Refactoring the code from junior developers and starting to
              measure the performance of the portal
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Portal support, solving bugs and creating new features
            </p>
          </li>
        </ol>
      </Box>
    </Box>
  );
};
