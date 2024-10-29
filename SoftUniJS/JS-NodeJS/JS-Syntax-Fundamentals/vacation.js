function vacation(numOfPeople, typeOfGroup, dayOfWeek) {
  let priceSum = null;
  const stuFridayTax = 8.45;
  const stuSaturdayTax = 9.8;
  const stuSundayTax = 10.46;

  const bussFridayTax = 10.9;
  const bussSaturdayTax = 15.6;
  const bussSundayTax = 16;

  const regFridayTax = 15;
  const regSaturdayTax = 20;
  const regSundayTax = 22.5;

  switch (typeOfGroup) {
    case "Students": {
      if (dayOfWeek == "Friday") {
        priceSum = numOfPeople * stuFridayTax;
      } else if (dayOfWeek == "Saturday") {
        priceSum = numOfPeople * stuSaturdayTax;
      } else if (dayOfWeek == "Sunday") {
        priceSum = numOfPeople * stuSundayTax;
      }

      if (numOfPeople >= 30) {
        priceSum -= priceSum * 0.15;
      }

      console.log(`Total price: ${priceSum.toFixed(2)}`);

      break;
    }
    case "Regular": {
      if (dayOfWeek == "Friday") {
        priceSum = numOfPeople * regFridayTax;
      } else if (dayOfWeek == "Saturday") {
        priceSum = numOfPeople * regSaturdayTax;
      } else if (dayOfWeek == "Sunday") {
        priceSum = numOfPeople * regSundayTax;
      }

      if (numOfPeople >= 10 && numOfPeople <= 20) {
        priceSum -= priceSum * 0.05;
      }

      console.log(`Total price: ${priceSum.toFixed(2)}`);

      break;
    }
    case "Business": {
      let chosenDay = null;
      if (dayOfWeek == "Friday") {
        priceSum = numOfPeople * bussFridayTax;
      } else if (dayOfWeek == "Saturday") {
        priceSum = numOfPeople * bussSaturdayTax;
      } else if (dayOfWeek == "Sunday") {
        priceSum = numOfPeople * bussSundayTax;
      }

      if (numOfPeople >= 100) {
        switch (dayOfWeek) {
          case "Friday": {
            priceSum -= 10 * bussFridayTax;
            break;
          }
          case "Saturday": {
            priceSum -= 10 * bussSaturdayTax;
            break;
          }
          case "Sunday": {
            priceSum -= 10 * bussSundayTax;
            break;
          }
        }
      }

      console.log(`Total price: ${priceSum.toFixed(2)}`);

      break;
    }
  }
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
