// Assigment 2
// Qns No 1

// et subjectMath = +prompt("Enter Math Marks");
// let subjectenglish = +prompt("Enter english Marks");
// let subjecthistory = +prompt("Enter history Marks");
// let subjectcomputer = +prompt("Enter computer Marks");
// let subjectscience = +prompt("Enter science Marks");

// let totalMarksPerSubject = 100;
// let numberOfSubjects = 5;
// let totalMarkspossible = totalMarksPerSubject * numberOfSubjects;

// let totalMarksObtained =
//   subjectMath +
//   subjectenglish +
//   subjecthistory +
//   subjectcomputer +
//   subjectscience;

// let percentage = (totalMarksObtained / totalMarkspossible) * 100;
// let grade;

// let percentageCheck =
//   percentage >= 90
//     ? (grade = "A+")
//     : percentage >= 80
//     ? (grade = "A")
//     : percentage >= 70
//     ? (grade = "B")
//     : percentage >= 60
//     ? (grade = "C")
//     : (grade = "Fail");

// document.write(` <h1>Mark Sheet</h1>
//  <p><strong>Math:</strong> ${subjectMath}</p>
// <p><strong>Science:</strong> ${subjectenglish}</p>
// <p><strong>English:</strong> ${subjecthistory}</p>
// <p><strong>History:</strong> ${subjectcomputer}</p>
// <p><strong>Computer:</strong> ${subjectscience}</p>
// <p><strong>Total Marks Obtained:</strong> ${totalMarksObtained} / ${totalMarkspossible}</p>
// <p><strong>Percentage:</strong> ${percentageCheck}</p>
// <p><strong>Grade:</strong> ${grade}</p>`);l


//qns no 2

let mobileData = {
  iphone: {
    iphone7: {
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: 200,
          ultrawide: 12,
          telephoto: 10,
          telephotoPeriscope: 10,
        },
        front: 10,
      },
      brand: "iphone",
      battery: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8: {
      processor: "Snapdragon 12 Gen 5",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: 180,
          ultrawide: 15,
          telephoto: 10,
          telephotoPeriscope: 20,
        },
        front: 12,
      },
      brand: "iphone",
      battery: 8000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    
  },
  xiomi: {
    redmiA2: {
      modelName: "Mi 12 Pro",
      display: {
        size: 6.73,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 120,
      },
      brand: "xiomi",
      processor: "Snapdragon 8 Gen 1",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 4600,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    
  },
  realme: {
    realmiNote50: {
      brand: "Realme",
      model: "Hypothetical Model",
      display: {
        size: "6.5 inches",
        resolution: "FHD+ (1080 x 2400 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 1",
      memory: {
        ram: "8GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
   
  },
  samsung: {
    samsung_Galaxy_S24: {
      brand: "Samsung",
      model: "Galaxy S24 Ultra",
      display: {
        size: 6.8,
        resolution: "3088x1440",
        type: "AMOLED",
      },
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        front: {
          megapixel: 40,
        },
      },
      battery: {
        capacity: 5000,
        fastCharging: "45W Super Fast Charging",
      },
      operatingSystem: "Android 14",
      additionalSpecs: {
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
    },
  },
};

let brandSelect = document.getElementById("brandSelect");
let modelSelect = document.getElementById("modelSelect");
let resultDiv = document.getElementById("result");

let brandOptions = Object.keys(mobileData);

for (let brandOption of brandOptions) {
  let option = document.createElement("option");
  option.value = brandOption;
  option.innerHTML = brandOption;

  brandSelect.appendChild(option);
}

brandSelect.addEventListener("change", function () {
  console.log("change select brand");
  let selectedBrand = brandSelect.value;
  modelSelect.innerHTML;
  ('<option value = "" disbaled selected>Choose a Model</option>');
  modelSelect.disabled = false;

  let modelOptions = Object.keys(mobileData[selectedBrand]);
  for (let modelOption of modelOptions) {
    let options = document.createElement("option");
    options.value = modelOption;
    options.innerHTML = modelOption;
    modelSelect.appendChild(options);
  }
});

document.getElementById("searchButton").addEventListener("click", function () {
  let selectedBrand = brandSelect.value;
  let selectedModel = modelSelect.value;

  if (!selectedBrand || !selectedModel) {
    resultDiv.innerHTML = "Please select both brand and model.";
  } else {
    resultDiv.innerHTML = `<h2>Selected Model</h2>
                          <p> Brand ${selectedBrand} </p>
                          <p> Brand ${selectedModel} </p>`;
  }
});
