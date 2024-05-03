import React from "react";
import power from "/public/assests/propertyDetail/icons/power.png";
import lift from "/public/assests/propertyDetail/icons/lift.png";
import club from "/public/assests/propertyDetail/icons/club.png";
import gym from "/public/assests/propertyDetail/icons/gym.png";
import park from "/public/assests/propertyDetail/icons/park.png";
import reserved_parking from "/public/assests/propertyDetail/icons/reservedParking.png";
import security from "/public/assests/propertyDetail/icons/security.png";
import water_storage from "/public/assests/propertyDetail/icons/water_storage.png";
import garden from "/public/assests/propertyDetail/icons/privateGarden.png";
import vaastu from "/public/assests/propertyDetail/icons/vaastu.png";
import service_good_lift from "/public/assests/propertyDetail/icons/serviceGood lift.png";
import visitorParking from "/public/assests/propertyDetail/icons/visitorParking.png";
import intercom_facilites from "/public/assests/propertyDetail/icons/intercom.png";
import maintanance_staff from "/public/assests/propertyDetail/icons/maintenancestaff.png";
import water_disposal from "/public/assests/propertyDetail/icons/waste_desposal.png";
import laundry_service from "/public/assests/propertyDetail/icons/laundry_service.png";
import internet from "/public/assests/propertyDetail/icons/wifif.png";
import television from "/public/assests/propertyDetail/icons/television.png";
import gas from "/public/assests/propertyDetail/icons/gas.png";
import jogging_track from "/public/assests/propertyDetail/icons/jogging_track.png";
import outdor_tennis from "/public/assests/propertyDetail/icons/outdoor_Tennis.png";
import easy_learing from "/public/assests/propertyDetail/icons/early_learning.png";
import kids_play_ground from "/public/assests/propertyDetail/icons/kids_pay_are.png";
import badminton from "/public/assests/propertyDetail/icons/badminton.png";
import Image from "next/image";

const amenities = [
  {
    title: "Power Back Up",
    icon: power,
  },
  {
    title: "Lift ",
    icon: lift,
  },
  {
    title: "Club House",
    icon: club,
  },
  {
    title: "Gymnasium",
    icon: gym,
  },

  {
    title: "Park ",
    icon: park,
  },
  {
    title: "Reserved Parking ",
    icon: reserved_parking,
  },
  {
    title: "Security ",
    icon: security,
  },
  {
    title: " Water Storage ",
    icon: water_storage,
  },
  {
    title: "Private Terrance/Garden ",
    icon: garden,
  },
  {
    title: "Vaastu COmpliant ",
    icon: vaastu,
  },
  {
    title: "Service/Goods Lift",
    icon: service_good_lift,
  },
  {
    title: "Visitor Parking",
    icon: visitorParking,
  },
  {
    title: "Intercom Facility ",
    icon: intercom_facilites,
  },
  {
    title: "Maintenance Staff",
    icon: maintanance_staff,
  },
  {
    title: "Water Disposal ",
    icon: water_disposal,
  },
  {
    title: "Laundry Service  ",
    icon: laundry_service,
  },
  {
    title: "Internet/Wi-FI connectivity ",
    icon: internet,
  },
  {
    title: "DTH Television Facility",
    icon: television,
  },
  {
    title: "Piped Gas",
    icon: gas,
  },
  {
    title: "Jogging and Strolling Track",
    icon: jogging_track,
  },
  {
    title: "Outdoor Tennis Courts",
    icon: outdor_tennis,
  },
  {
    title: "Early Learning Center",
    icon: easy_learing,
  },
  {
    title: "Kids Play Area",
    icon: kids_play_ground,
  },
  {
    title: "Indoor Squash & Badminton Courts  ",
    icon: badminton,
  },
];

const PropertyAmenities = () => {
  return (
    <section className="w-full bg-gray-200  my-10 p-10">
      <h3 className="font-bold text-3xl">Amenities</h3>
      <div className="flex flex-wrap gap-5">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex  items-center gap-3  w-[14rem] mt-[4rem] ">
            <Image
              src={amenity.icon}
              width={50}
              height={50}
              alt="Service_icon"
            />
            <h3>{amenity.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyAmenities;
