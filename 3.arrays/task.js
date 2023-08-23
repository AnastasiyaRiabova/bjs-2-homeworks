function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUser = users.filter(user => user.gender === gender);
	if (filteredUser.length === 0) {
		return 0;
	}
	const totalAge = filteredUser.reduce((acc, user) => acc + user.age, 0)
	const averageAge = totalAge / filteredUser.length;
	return averageAge;
}