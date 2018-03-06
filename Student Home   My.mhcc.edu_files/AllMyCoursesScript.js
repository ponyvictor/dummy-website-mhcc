function highlight(id, displayName) {
    jQuery("td[name$='" + id + "']").toggleClass("activeTimeBlockHighlight");
    jQuery("td[name^='" + id + "']").toggleClass("activeTimeBlockHighlight");
    jQuery("tr[name^='" + id + "']").toggleClass("trHighlight");
    jQuery("td[data$='" + id + "']").toggleClass("activeTimeBlockHighlight");
    jQuery("td[data^='" + id + "']").toggleClass("activeTimeBlockHighlight");
    toggleOverlapTxt(id);
    //alert(id);
}
function toggleOverlapTxt(id) {
    var spanTxt = jQuery("td[name^='" + id + "']").children(":first");
    var returnTxt = spanTxt.attr("data");
    var toggleTxt = spanTxt.text();
    if (toggleTxt.length > 0) {
        spanTxt.text("");
    }
    else
    {
        spanTxt.text(returnTxt);
    }
}
function hideAllScheds() {
    id = "imgCollapseSched";
    jQuery("img[name^='" + id + "']").each(function () {
        if (this.src.indexOf("collapse.gif") !== -1) {
            var name = this.name.replace(id, "");
            toggleSched(this, "tbl" + name);
        }
    });
    document.getElementById("sHideScheds").style.display = "none";
    document.getElementById("sShowScheds").style.display = "";
}
function showAllScheds() {
    id = "imgCollapseSched";
    jQuery("img[name^='" + id + "']").each(function () {
        if (this.src.indexOf("expand.gif") !== -1) {
            var name = this.name.replace(id, "");
            toggleSched(this, "tbl" + name);
        }
    });
    document.getElementById("sHideScheds").style.display = "";
    document.getElementById("sShowScheds").style.display = "none";
}
function hideAllCourseLists() {
    id = "imgCollapseCourse";
    jQuery("img[name^='" + id + "']").each(function () {
        if (this.src.indexOf("collapse.gif") !== -1) {
            var name = this.name.replace(id, "");
            toggleCourses(this, name);
        }
    });
    document.getElementById("sHideCourseLists").style.display = "none";
    document.getElementById("sShowCourseLists").style.display = "";
}
function showAllCourseLists() {
    id = "imgCollapseCourse";
    jQuery("img[name^='" + id + "']").each(function () {
        if (this.src.indexOf("expand.gif") !== -1) {
            var name = this.name.replace(id, "");
            toggleCourses(this, name);
        }
    });
    document.getElementById("sHideCourseLists").style.display = "";
    document.getElementById("sShowCourseLists").style.display = "none";
}
function toggleCourses(o, trName) {
    if (o.src.indexOf("collapse.gif") !== -1) {
        jQuery("tr[name$='" + trName + "']").each(function () {
            jQuery("tr[id='" + this.id + "']").hide();
        });
        o.src = gridToggleImagePath + 'expand.gif';
    }
    else {
        jQuery("tr[name$='" + trName + "']").each(function () {
            jQuery("tr[id='" + this.id + "']").show();
        });
        o.src = gridToggleImagePath + 'collapse.gif';
    }
}
function toggleSched(o, tblName) {
    if (o.src.indexOf("collapse.gif") !== -1) {
        jQuery("table[name='" + tblName + "']").hide();
        o.src = gridToggleImagePath + 'expand.gif';
    }
    else {
        jQuery("table[name='" + tblName + "']").show();
        o.src = gridToggleImagePath + 'collapse.gif';
    }
}
function toggleAll(o, name) {
    if (o.src.indexOf("collapse.gif") !== -1) {
        o.src = gridToggleImagePath + 'expand.gif';
        jQuery("img[name$='imgCollapseCourse" + name + "']").each(function () {
            if (this.src.indexOf("collapse.gif") !== -1) {
                toggleCourses(this, name);
            }
        });
        jQuery("img[name$='imgCollapseSched" + name + "']").each(function () {
            if (this.src.indexOf("collapse.gif") !== -1) {
                toggleSched(this, "tbl" + name);
            }
        });
    }
    else {
        jQuery("img[name$='imgCollapseCourse" + name + "']").each(function () {
            if (this.src.indexOf("expand.gif") !== -1) {
                toggleCourses(this, name);
            }
        });
        jQuery("img[name$='imgCollapseSched" + name + "']").each(function () {
            if (this.src.indexOf("expand.gif") !== -1) {
                toggleSched(this, "tbl" + name);
            }
        });
        o.src = gridToggleImagePath + 'collapse.gif';
    }
}