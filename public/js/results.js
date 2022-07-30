$resultClass = document.querySelectorAll(".resultCard")

$resultClass.forEach(element => {
    // 
    element.addEventListener("click", () => {

        $resultClass.forEach((elementClear)=>{
            let backgroundColorClear
            if (elementClear.getAttribute("backgroundClass") === "gold"  ) {backgroundColorClear = "#FAFF09"}
            if (elementClear.getAttribute("backgroundClass") === "silver") {backgroundColorClear = "#E5E1E1"}
            if (elementClear.getAttribute("backgroundClass") === "bronze") {backgroundColorClear = "#9C7207"}
            elementClear.setAttribute("style", `background-color:${backgroundColorClear}`)
        })
        console.log("yata=",element.getAttribute("tripId"))
        let backgroundColor
        if (element.getAttribute("backgroundClass") === "gold"  ) {backgroundColor = "#FAFF09"}
        if (element.getAttribute("backgroundClass") === "silver") {backgroundColor = "#E5E1E1"}
        if (element.getAttribute("backgroundClass") === "bronze") {backgroundColor = "#9C7207"}
        element.setAttribute("style", `background-color:${backgroundColor};border: solid 3px red`)
      },
        false
      );
});