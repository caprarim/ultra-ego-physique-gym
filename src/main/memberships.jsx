import React, { useEffect, useState } from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import EndBar from "./endBar.jsx";

const assetBase = import.meta.env.BASE_URL;

const timings = [
  {
    label: "Co-Timing",
    value: "07:00 AM - 11:00 AM | 05:00 PM - 02:00 AM",
  },
  {
    label: "Only-Ladies",
    value: "11:00 AM - 04:00 PM",
  },
];

const memberships = [
  {
    slug: "Strength-Special",
    image: `${assetBase}ultraego/7.png`,
    title: "Strength Special",
    price: "PKR 2500",
    period: "/ month",
    access: "Strength Machines Only",
    description:
      "A clean self-training option for members focused on strength machines and disciplined daily work.",
  },
  {
    slug: "Cardio",
    image: `${assetBase}ultraego/14.PNG`,
    title: "Cardio",
    price: "PKR 2500",
    period: "/ month",
    access: "Cardio Only",
    description:
      "Built for conditioning, stamina, and a focused cardio routine in a premium training space.",
  },
  {
    slug: "Ladies-Class",
    image: `${assetBase}ultraego/18.PNG`,
    title: "Ladies Class",
    price: "PKR 2500",
    period: "/ month",
    access: "Zumba, Aerobics, Yoga",
    description:
      "Ladies-only classes designed for energy, movement, and consistency in a dedicated session block.",
  },
  {
    slug: "Combine",
    image: `${assetBase}ultraego/15.PNG`,
    title: "Combine",
    price: "PKR 5000",
    period: "/ month",
    access: "Cardio + Strength",
    description:
      "A complete monthly option for members who want both cardio access and strength training together.",
  },
];

const packages = [
  {
    slug: "Personal Training",
    image: `${assetBase}ultraego/main_personaltrain.PNG`,
    title: "Personal Training",
    feeItems: [
      { label: "Group Training", value: "PKR 5,000" },
      { label: "Personal Training", value: "PKR 8,000" },
      { label: "One-on-One Training", value: "PKR 10,000" },
    ],
    period: "/ monthly",
    access: "Membership Plan",
    description:
      "A sharper commitment for members ready to stay consistent and build momentum over time.",
  },
  {
    slug: "Quarterly",
    image: `${assetBase}ultraego/16.PNG`,
    title: "Quarterly",
    price: "PKR 7000",
    period: "/ 3 months",
    access: "Membership Plan",
    description:
      "A sharper commitment for members ready to stay consistent and build momentum over time.",
  },
  {
    slug: "Half-Year",
    image: `${assetBase}ultraego/19.PNG`,
    title: "Half Year",
    price: "PKR 14000",
    period: "/ 6 months",
    access: "Membership Plan",
    description:
      "A stronger long-term option with better value for members who train seriously and stay locked in.",
  },
  {
    slug: "Yearly",
    image: `${assetBase}ultraego/3.PNG`,
    title: "Yearly",
    price: "PKR 25000",
    period: "/ 12 months",
    access: "Membership Plan",
    description:
      "Focused, one-on-one coaching designed to maximize your results with a personalized plan, expert guidance, and faster progress.",
  },
];

const MembershipCard = ({ plan, joinPlan }) => (
  <article className="membership-plan-card" key={plan.slug}>
    <div className="membership-plan-image-frame">
      <img
        src={plan.image}
        alt={plan.title}
        className={`membership-plan-image${
          plan.slug === "Yearly" ? " membership-plan-image-yearly" : ""
        }`}
      />
    </div>
    <div className="membership-plan-content">
      <h3 className="membership-plan-title">{plan.title}</h3>
      {plan.feeItems ? (
        <div className="membership-fee-structure">
          <p className="membership-fee-structure-title">Fee Structure</p>
          <div className="membership-fee-list">
            {plan.feeItems.map((item) => (
              <div className="membership-fee-row" key={item.label}>
                <span className="membership-fee-label">{item.label}</span>
                <span className="membership-fee-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="membership-plan-price-row membership-plan-price-row-compact">
            <span className="membership-plan-price-period">
              {plan.period}
            </span>
          </div>
        </div>
      ) : (
        <div className="membership-plan-price-row">
          <span className="membership-plan-price">{plan.price}</span>
          <span className="membership-plan-price-period">{plan.period}</span>
        </div>
      )}
      <p className="membership-plan-access">{plan.access}</p>
      <p className="membership-plan-location">
        <span className="membership-plan-location-label">Location:</span> Plot
        #A, 906, near Ronaq-e-Sheereni, North Karachi
      </p>
      <p className="membership-plan-description">{plan.description}</p>

      <div className="membership-plan-timing">
        <h4 className="membership-plan-timing-title">Timing</h4>
        <ul className="membership-plan-timing-list">
          {timings.map((timing) => (
            <li key={`${plan.slug}-${timing.label}`}>
              <span className="membership-plan-timing-label">
                {timing.label}
              </span>
              <span className="membership-plan-timing-value">
                {timing.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="join-membership membership-plan-buy"
        onClick={() => joinPlan(plan.slug)}
      >
        Buy Now
      </button>
    </div>
  </article>
);

const Memberships = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".membership-page > *");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);
  let nav = useNavigate();
  let [isModalDisplay, setModalDisplay] = useState(true);

  const joinPlan = (plan) => {
    setModalDisplay(false);
    nav(`/joinMembership/${plan}`);
  };

  return (
    <>
      <main className="gym-page membership-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section
          className="membership-modal"
          style={isModalDisplay ? { display: "block" } : { display: "none" }}
        >
          <div className="membership-modal-header">
            <h2 className="membership-modal-title">Memberships and Packages</h2>
            <p className="membership-modal-step">
              Timings stay fixed. Admission fee is PKR 1500 only.
            </p>
          </div>

          <div className="membership-section">
            <div className="membership-section-header">
              <h3 className="membership-section-title">
                Choose Your Memberships
              </h3>
              <p className="membership-section-copy">
                Monthly options built around how you train.
              </p>
            </div>

            <div className="membership-showcase-grid membership-showcase-grid-memberships">
              {memberships.map((plan) => (
                <MembershipCard
                  key={plan.slug}
                  plan={plan}
                  joinPlan={joinPlan}
                />
              ))}
            </div>
          </div>

          <div className="membership-section membership-section-packages">
            <div className="membership-section-header">
              <h3 className="membership-section-title">Choose Your Packages</h3>
              <p className="membership-section-copy">
                Longer plans with stronger value.
              </p>
            </div>

            <div className="membership-showcase-grid membership-showcase-grid-packages">
              {packages.map((plan) => (
                <MembershipCard
                  key={plan.slug}
                  plan={plan}
                  joinPlan={joinPlan}
                />
              ))}
            </div>
          </div>
        </section>
        <EndBar />
      </main>
    </>
  );
};

export default Memberships;
