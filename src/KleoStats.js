import React, { useEffect, useState } from "react";
import { Users, CreditCard, FileUp } from "lucide-react";

const MOCK_STATS = [
	{ id: "users", title: "Users", value: 1500 },
	{ id: "transactions", title: "Transactions", value: 4500 },
	{ id: "itemsUploaded", title: "Items Uploaded", value: 372500 },
];

const ICONS = {
	users: <Users />,
	transactions: <CreditCard />,
	itemsUploaded: <FileUp />,
};

const KleoStats = () => {
	const [stats, setStats] = useState([]);

	useEffect(() => {
		// Placeholder for API call
		// fetch('API_URL')
		//   .then(response => response.json())
		//   .then(data => setStats(data))
		//   .catch(error => console.error('Error fetching data:', error));

		// Using constant data for now
		setStats(MOCK_STATS);
	}, []);

	return (
		<div className="kleo-stats">
			<h2>KLEO STATS</h2>
			<div className="stats-container">
				{stats.map((stat) => (
					<StatCard
						key={stat.id}
						title={stat.title}
						value={stat.value.toLocaleString()}
						icon={ICONS[stat.id]}
					/>
				))}
			</div>
			<style jsx>{`
				.kleo-stats {
					min-height: 100vh;
					background-color: #0f1117;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				h2 {
					font-size: 2rem;
					font-weight: bold;
					color: white;
					margin-bottom: 3rem;
					text-align: center;
				}
				.stats-container {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 2rem;
					max-width: 1200px;
				}
			`}</style>
		</div>
	);
};

const StatCard = ({ title, value, icon }) => {
	return (
		<div className="stat-card">
			<div className="icon-container">{icon}</div>
			<div className="value">{value}</div>
			<div className="title">{title}</div>
			<style jsx>{`
				.stat-card {
					background-color: #1a1d26;
					width: 18rem;
					padding: 2rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					border-radius: 0.5rem;
					box-shadow: 0 4px 20px -4px rgba(157, 92, 255, 0.3);
					transition: all 0.3s ease;
					cursor: pointer;
				}
				.stat-card:hover {
					box-shadow: 0 8px 30px -4px rgba(157, 92, 255, 0.4);
				}
				.icon-container {
					background-color: #2a2d3a;
					color: #9d5cff;
					padding: 1rem;
					border-radius: 50%;
					margin-bottom: 1.5rem;
				}
				.icon-container :global(svg) {
					width: 3rem;
					height: 3rem;
				}
				.value {
					font-size: 2.5rem;
					font-weight: bold;
					color: white;
					margin-bottom: 0.5rem;
				}
				.title {
					font-size: 1.125rem;
					font-weight: 500;
					color: #d1d5db;
				}
			`}</style>
		</div>
	);
};

export default KleoStats;
