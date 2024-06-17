import React, { useState } from "react";
import CarDetails from "../pages/CarDetails.jsx";
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";
import "../styles/car-listing.css";
import AddServiceDetailsForm from "./AddServiceDetails.jsx";
const carData = [
  {
    id: 1,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "Bike",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img01,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 2,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "Truck",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img02,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 3,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "van",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img03,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 4,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "Bike",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img04,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 5,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "van",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img05,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 6,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "van",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img06,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 7,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "van",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img07,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 8,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "van",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img08,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 9,
    vehiclePrice: "15000",
    registrationNo: "CD1452cp",
    chassisNumber: "ABC123456DEF",
    engineNo: "XYZ789",
    vehicleState: "New",
    numberOfDoors: 4,
    color: "Red",
    seatingCapacity: 16,
    condition: "Excellent",
    dimensions: {
      length: 4.5,
      height: 1.8,
      width: 2.0,
    },
    cylinderCapacity: 2000,
    fuelType: "Petrol",
    manufacturedCountry: "Japan",
    assembled: true,
    vehicleType: "Truck",
    brand: "Toyota",
    style: "Sedan",
    model: "Camry",
    manufacturedYear: 2022,
    albumUrls: [],
    imgUrl: img02,
    description:
      "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

const CarItem = ({ car, onEdit, onDelete,onServiceAdd }) => (
  <div className="car-item">
    <img src={car.imgUrl} alt={`${car.brand} ${car.carName}`} />
    <h2>{car.carName}</h2>
    <p>
      <strong>Brand:</strong> {car.brand}
    </p>
    <p>
      <strong>Model:</strong> {car.model}
    </p>
    <p>
      <strong>Price:</strong> ${car.vehiclePrice} / day
    </p>
   <div className="button_styles">
   <button onClick={() => onEdit(car)} className="edit_button">Edit</button>
   <button onClick={() => onDelete(car.id)} className="delete_button">Delete</button>
   <button onClick={() => onServiceAdd(car.id)} className="edit_button1">Add Service Details</button>
   </div>
    
  </div>
);


const CarListingPage = () => {
  const [cars, setCars] = useState(carData);
  const [editingCar, setEditingCar] = useState(null);
  const [addingService, setAddingService] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  const handleDelete = (carId) => {
    setCars(cars.filter((car) => car.id !== carId));
  };

  const handleSave = (updatedCar) => {
    setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
    setEditingCar(null);
  };

  const handleServiceAdd = (carId) => {
    setSelectedCarId(carId);
    setAddingService(true);
  };

  const handleServiceSave = (newServiceDetails) => {
    setCars(cars.map((car) =>
      car.id === selectedCarId
        ? { ...car, serviceDetails: newServiceDetails }
        : car
    ));
    setAddingService(false);
    setSelectedCarId(null);
  };
        

  return (
    <div className="car-listing">
      <h1 className="car-listing-title">Car Listing</h1>
      {editingCar ? (
        <CarDetails
          car={editingCar}
          onSave={handleSave}
          onCancel={() => setEditingCar(null)}
        />
      ) : addingService ? (
        <AddServiceDetailsForm
          serviceDetails={{
            serviceDetailsId: null,
            serviceDate: "",
            serviceCenterName: "",
            serviceCenterLocation: "",
            travelDistance: "",
            serviceCost: "",
            driverName: "",
            driverPhone: "",
            nextServiceDate: "",
            nextServiceDistance: "",
            vehicleId: { vehicleId: selectedCarId },
            changedParts: [],
          }}
          onSave={handleServiceSave}
          onCancel={() => setAddingService(false)}
        />
      ) : (
        <div className="car-list">
          {cars.map((car) => (
            <CarItem
              key={car.id}
              car={car}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onServiceAdd={handleServiceAdd}
            />
          ))}
        </div>
      )}
    </div>

  );
};

export default CarListingPage;
