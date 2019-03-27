var tagsInputArray;
var tagsInputBlock;
var tagsInputEl;
var tagsInputSearch;
var tagsInputSearchArr;

function tagsInput(el, searchArr){
	tagsInputSearchArr = searchArr;

	tagsInputEl = el;
  console.log(tagsInputEl.value);
	tagsInputArray = tagsInputEl.value.split(',');
	
	tagsInputEl.style.display = 'none';
		
	var bar = document.createElement('div');
	bar.id = 'tagsInput_bar';
	
	tagsInputBlock = document.createElement('span');
	tagsInputBlock.id = 'tagsInput_tagsInputBlock';
	bar.appendChild(tagsInputBlock);
	
	var input = document.createElement('input');
	input.type = 'text';
	input.id = 'tagsInput_input';
	input.placeholder = 'ajouter un tag';
	
	tagsInputSearch = document.createElement('div');
	tagsInputSearch.id = 'tagsInput_search';
		
	bar.appendChild(input);
	tagsInputEl.parentNode.insertBefore(tagsInputSearch, tagsInputEl);
	
	tagsInputEl.parentNode.insertBefore(bar, tagsInputEl);
	
	tagsInputShowTags();
	
	input.onkeydown = function(e){
		input.className = 'default';
		if (e.which == 13 || e.which == 188) {
			e.preventDefault();
			var selectedLi = document.getElementById('tagsInput_selected');
			if (selectedLi != undefined) {
				tagsInputArray.push(selectedLi.textContent);
				input.value = '';
				tagsInputShowTags();
				tagsInputEl.value = tagsInputArray.join(', ');
				tagsInputHideDropdown();
			}
			else if (tagsInputArray.indexOf(input.value)==-1) {
				tagsInputArray.push(input.value);
				input.value = '';
				tagsInputShowTags();
				tagsInputEl.value = tagsInputArray.join(', ');
				tagsInputHideDropdown();
			}
			else {
				input.className = 'red';
			}
		}
		else if (e.which == 40) {
			e.preventDefault();
			var tagsInputSearch = document.getElementById('tagsInput_search');
			var selectedLi = document.getElementById('tagsInput_selected');
			var tagsLiArray = tagsInputSearch.getElementsByTagName('li');
			if (tagsLiArray.length != 0) {
				if (selectedLi == null) {
					tagsLiArray[0].id = 'tagsInput_selected';
				}
				else {
					for (i in tagsLiArray) {
						if (tagsLiArray[i].id == 'tagsInput_selected') {
							tagsLiArray[i].id = '';
							if (tagsLiArray[parseInt(i)+1] != undefined) {
								tagsLiArray[parseInt(i)+1].id = 'tagsInput_selected';
								break;
							}
							else {
								tagsLiArray[0].id = 'tagsInput_selected';
								break;
							}
						}
					}
				}
			}
		}
		else if (e.which == 38) {
			e.preventDefault();
			var tagsInputSearch = document.getElementById('tagsInput_search');
			var selectedLi = document.getElementById('tagsInput_selected');
			var tagsLiArray = tagsInputSearch.getElementsByTagName('li');
			if (tagsLiArray.length != 0) {
				if (selectedLi == null) {
					tagsLiArray[tagsLiArray.length-1].id = 'tagsInput_selected';
				}
				else {
					for (i in tagsLiArray) {
						if (tagsLiArray[i].id == 'tagsInput_selected') {
							tagsLiArray[i].id = '';
							if (tagsLiArray[parseInt(i)-1] != undefined) {
								tagsLiArray[parseInt(i)-1].id = 'tagsInput_selected';
								break;
							}
							else {
								tagsLiArray[tagsLiArray.length-1].id = 'tagsInput_selected';
								break;
							}
						}
					}
				}
			}
		}
		else if (e.which == 8) {
			if (input.value.length == 0) {
				if (tagsInputArray[tagsInputArray.length-1] != undefined) {
					e.preventDefault();
					//document.getElementById('tagsInput_input').value = tagsInputArray[tagsInputArray.length-1];
				}
				tagsInputArray.pop();
				tagsInputEl.value = tagsInputArray.join(', ');
				tagsInputShowTags();
				tagsInputDropdown();
			}
			else if (input.value.length == 1) {
				tagsInputHideDropdown();
			}
			else {
				tagsInputDropdown();
			}
		}
	};
	
	input.onkeyup = function(e){
		if (input.value.length > 0 && e.which != 40 && e.which != 38) {
			tagsInputDropdown()
		}
	};
	
	input.onfocus = function(){
		tagsInputDropdown();
	};
	
	input.onblur = function(e){
		if (e.target.id != 'tagsInput_search') {
			tagsInputHideDropdown();
		}
	};

	bar.onclick = function(){
		input.focus();
	};
}
function tagsInputShowTags() {
	tagsInputBlock.innerHTML = '';
	for (i in tagsInputArray) {
		if (tagsInputArray[i] != '') {
			var tag = document.createElement('div')
			tag.className = 'tagsInput_tag';
			tag.innerHTML = tagsInputArray[i]+'<span onclick="tagsInputRemove('+i+')">&times;</span>';
			tagsInputBlock.appendChild(tag);
		}
	}
}

function tagsInputDropdown(){
	var input = document.getElementById('tagsInput_input');
	if (input.value.length >= 1) {
		var tagsInputSearch = document.getElementById('tagsInput_search');
		tagsInputSearch.style.display = 'block';
		tagsInputSearch.style.left = input.offsetLeft+'px';
		tagsInputSearch.style.top = (input.offsetTop+input.offsetHeight)+'px';
		tagsInputSearch.innerHTML = '';
		var patt = new RegExp(input.value,"i");
		var x = 0;
		for (i in tagsInputSearchArr) {
			if (tagsInputSearchArr[i].match(patt) && tagsInputArray.indexOf(tagsInputSearchArr[i])==-1) {
				tagsInputSearch.innerHTML += '<li onmousedown="tagsInputAdd(\''+tagsInputSearchArr[i]+'\')">'+tagsInputSearchArr[i].replace(patt, function(y){return '<span class="highlight">'+y+'</span>'})+'</li>';
				x++;
				if (x == 10) {
					tagsInputSearch.innerHTML += '<div id="tagsInput_Dot">...</div>';
					break;
				}
			}
		}
		if (x == 0) {
			tagsInputHideDropdown();
		}
	}
	else {
		tagsInputHideDropdown();
	}
}

function tagsInputHideDropdown() {
	document.getElementById('tagsInput_search').style.display = 'none';
	document.getElementById('tagsInput_search').innerHTML = '';
}

function tagsInputAdd(str) {
	var input = document.getElementById('tagsInput_input');
	if (tagsInputArray.indexOf(str)==-1) {
		tagsInputArray.push(str);
		input.value = '';
		tagsInputShowTags();
		tagsInputEl.value = tagsInputArray.join(', ');
		tagsInputHideDropdown();
		input.className = 'default';
	}
	else {
		input.className = 'red';
		input.value = str;
	}
	input.focus();
}

function tagsInputRemove(i) {
	tagsInputArray.splice(i, 1);
	tagsInputEl.value = tagsInputArray.join(', ');
	tagsInputShowTags();
}
module.exports = {
  tagsInput: tagsInput
}