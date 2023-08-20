
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [checked, setChecked] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [originalData, setOriginalData] = useState([])

// useEffect(() => {
//     setOriginalData(data)
// },[])
//   const newDataChecked = () => {
//     const newDataChecked = data.filter((item => item.increase));
//     setData(newDataChecked);
//   };

//   const changeIncreaseChecked = (e) => {
//     if(e.target.checked) {
//         setChecked(true);
//         console.log('включили')
//         setOriginalData(data)
//         newDataChecked()
//     } else {
//         setChecked(false);
//         setData(originalData)
//         console.log('отключили')
//     }
   
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     if (searchTerm && !item.head.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return false;
//     }
//     if (checked && !item.increase) {
//       return false;
//     }
//     return true;
//   });

//   const addNewPeroson = (e) => {
//     e.preventDefault();
//     const newPerson = {
//       id: Date.now(),
//       head: name,
//       body: age,
//       increase: false,
//     };
//     setData(prevData => [...prevData, newPerson]);
//   };

//   const changePersonIncrease = (id) => {
//     setData(prevData => {
//       const updateData = prevData.map(item => {
//         if (item.id === id) {
//           return { ...item, increase: !item.increase };
//         }
//         return item;
//       });
//       return updateData;
//     });
//   };