import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Timeline = () => {
  const { t } = useTranslation();
  return (
    <Box p={"2em"}>
      <Text fontSize={"3xl"}>Timeline</Text>
      <Box>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("November 2020 - March 2021")}
            </time>
            <h3 className="text-lg font-semibold ">
              {t("Seiren do Brasil • Fullstack Developer Internship")}
            </h3>
            <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
              - {t("Developing in C# creating new features with WebForms")}
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              - {t("Using MYSQL as database to store the client data.")}
            </p>
          </li>
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("May 2021 - April 2022")}
            </time>
            <h3 className="text-lg font-semibold">
              {t(" HUAWEI Facens • Web Developer Internship")}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              -{" "}
              {t(
                "Developing Logistics systems to tax calculation systems, using VueJs, Huawei Cloud and MySQL"
              )}
            </p>
          </li>
          <li className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("March 2022 - August 2022")}
            </time>
            <h3 className="text-lg font-semibold">
              {t("HUAWEI Facens • Frontend Web Developer Jr.")}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              -{" "}
              {t(
                "Refactoring Code and focusing on unit tests with Jest to avoid bugs in production environment"
              )}
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("August 2022 - October 2022")}
            </time>
            <h3 className="text-lg font-semibold">
              {t("HUAWEI Facens • Frontend Web Developer.")}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              -{" "}
              {t(
                "Refactoring the code from junior developers and starting to measure the performance of the portal"
              )}
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - {t("Portal support, solving bugs and creating new features")}
            </p>
          </li>
        </ol>
      </Box>
    </Box>
  );
};
