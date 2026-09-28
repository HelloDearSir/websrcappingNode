const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require('xlsx');
// Url is the domain to grab the data 
const url = " ";
/*axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    // Find the table with the specified class
    const targetTable = $(".table");
    // If the target table is found, parse its content
    if (targetTable.length > 0) {
      const data = [];
      const trElements = targetTable.find("tr");
      trElements.each((index, tr) => {
        const rows = [];
        $(tr).find("td").each((i, cell) => {
          rows.push($(cell).text().trim());
        });
        if (rows.length > 0) {
          data.push(rows);
        }
      });
            // Split the data array based on the key "Overview (outline)"
      const splitIndex = data.findIndex(obj => Object.keys(obj)[0] === "Overview(outline)");
    
   
      if(splitIndex !== -1) {
        firstTableData  = data.slice(0, splitIndex);
        secondTableData = data.slice(splitIndex);
      } else {
        firstTableData = data;
        secondTableData = [];
      }

       
      console.log("First Table Data:", firstTableData);
      console.log("Second Table Data:", secondTableData);
    } else {
      console.log("No table with the specified class found.");
    }

    const workbook = xlsx.utils.book_new();
    const worksheet1 = xlsx.utils.aoa_to_sheet(firstTableData);
    xlsx.utils.book_append_sheet(workbook, worksheet1, "First Table");
    if(secondTableData.length > 0) {
      const worksheet2  = xlsx.utils.aoa_to_sheet(secondTableData);
    xlsx.utils.book_append_sheet(workbook, worksheet2, "Second Table");

    }
    xlsx.writeFile(workbook,"output.xlsx");
    console.log("data is stroed into the output.xlsx");
 
  })

  .catch(error => {
    console.error("Error fetching data:", error);
  });*/

async function Webscrapping() {
  axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    // Find the table with the specified class
    const targetTable = $(".table");
    // If the target table is found, parse its content
    if (targetTable.length > 0) {
      const data = [];
      const trElements = targetTable.find("tr");
      trElements.each((index, tr) => {
        const rows = [];
        $(tr).find("td").each((i, cell) => {
          rows.push($(cell).text().trim());
        });
        if (rows.length > 0) {
          data.push(rows);
        }
      });
            // Split the data array based on the key "Overview (outline)"
      const splitIndex = data.findIndex(obj => Object.keys(obj)[0] === "Overview(outline)");
    
   
      if(splitIndex !== -1) {
        firstTableData  = data.slice(0, splitIndex);
        secondTableData = data.slice(splitIndex);
      } else {
        firstTableData = data;
        secondTableData = [];
      }

       
      console.log("First Table Data:", firstTableData);
      console.log("Second Table Data:", secondTableData);
    } else {
      console.log("No table with the specified class found.");
    }

    const workbook = xlsx.utils.book_new();
    const worksheet1 = xlsx.utils.aoa_to_sheet(firstTableData);
    xlsx.utils.book_append_sheet(workbook, worksheet1, "First Table");
    if(secondTableData.length > 0) {
      const worksheet2  = xlsx.utils.aoa_to_sheet(secondTableData);
    xlsx.utils.book_append_sheet(workbook, worksheet2, "Second Table");

    }
    xlsx.writeFile(workbook,"output.xlsx");
    console.log("data is stroed into the output.xlsx");
 
  })

  .catch(error => {
    console.error("Error fetching data:", error);
  });
});
Webscrapping();
