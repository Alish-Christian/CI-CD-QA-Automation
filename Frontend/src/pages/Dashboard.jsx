import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import AppFooter from '../components/AppFooter';

// --- Helper Components & Icons (Self-contained) ---

const ZapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const CheckCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
);

const XCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24" a fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
    </svg>
);

const ExclamationCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
    </svg>
);


const BarChartPlaceholder = () => (
    <div className="w-full h-64 bg-base-100/30 rounded-lg flex items-center justify-center p-4">
        <div className="flex items-end h-full w-full gap-2 sm:gap-4">
            {[40, 60, 50, 75, 90, 65, 80].map((height, i) => (
                <div 
                    key={i} 
                    className="flex-1 bg-primary rounded-t-lg opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out"
                    style={{ 
                        '--bar-height': `${height}%`,
                        animation: `bar-rise 1s ease-out ${i * 100}ms backwards` 
                    }}
                >
                </div>
            ))}
        </div>
    </div>
);

/**
 * Main Dashboard Component
 */
export default function Dashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const stats = [
        { title: "Overall Pass Rate", value: "92.8%", change: "+1.2%", status: "success" },
        { title: "Test Coverage", value: "85.2%", change: "+3.5%", status: "success" },
        { title: "New Tests Generated", value: "124", change: "", status: "neutral" },
        { title: "Critical Failures", value: "3", change: "-2", status: "error" },
    ];

    const recentRuns = [
        { id: "RUN-2911", branch: "feat/new-login-flow", status: "Passed", duration: "3m 45s", time: "52 minutes ago" },
        { id: "RUN-2910", branch: "fix/api-caching-bug", status: "Failed", duration: "1m 12s", time: "2 hours ago" },
        { id: "RUN-2909", branch: "main", status: "Passed", duration: "4m 02s", time: "6 hours ago" },
        { id: "RUN-2908", branch: "refactor/user-profile", status: "Skipped", duration: "0m 15s", time: "1 day ago" },
        { id: "RUN-2907", branch: "main", status: "Passed", duration: "3m 58s", time: "1 day ago" },
    ];
    
    const statusMap = {
        Passed: { icon: <CheckCircleIcon className="w-5 h-5 text-success" />, color: "text-success" },
        Failed: { icon: <XCircleIcon className="w-5 h-5 text-error" />, color: "text-error" },
        Skipped: { icon: <ExclamationCircleIcon className="w-5 h-5 text-warning" />, color: "text-warning" },
    };

    return (
        <div className="font-sans bg-base-100 min-h-screen antialiased">
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bar-rise {
                    from { height: 0%; opacity: 0; }
                    to { height: var(--bar-height); opacity: 0.75; }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out backwards;
                }
            `}</style>

            {/* <Navbar/> */}
            <div 
                className="p-4 sm:p-6 md:p-8 transition-opacity duration-500 ease-in" 
                style={{ opacity: isLoaded ? 1 : 0 }}
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 animate-fade-in-up">
                    <div>
                      
                        <h1 className="text-3xl font-bold text-base-content">Project Dashboard</h1>
                        {/* CHANGE HERE */}
                        <p className="mt-1 text-neutral-content/70">Welcome back, Developer! Here's your test summary.</p>
                    </div>
                    <button className="btn btn-primary mt-4 sm:mt-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300">
                        <ZapIcon className="w-5 h-5 mr-2" />
                        Generate New Tests
                    </button>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={stat.title} 
                            className="bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-black/10 shadow-lg animate-fade-in-up transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-primary/20" 
                            style={{ animationDelay: `${index * 100}ms` }}>
                             {/* CHANGE HERE */}
                            <p className="text-sm text-secondary font-medium">{stat.title}</p>
                            <div className="flex items-baseline justify-between mt-2">
                                <p className="text-3xl font-bold text-base-content">{stat.value}</p>
                                {stat.change && (
                                    <span className={`text-sm font-semibold ${stat.status === 'success' ? 'text-success' : 'text-error'}`}>
                                        {stat.change}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Test Runs */}
                    <div className="lg:col-span-2 bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-black/10 shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <h2 className="text-xl font-bold mb-4 text-base-content">Recent Test Runs</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className="border-b border-black/10">
                                        <th className="bg-transparent">Run ID</th>
                                        <th className="bg-transparent">Branch</th>
                                        <th className="bg-transparent">Status</th>
                                        <th className="bg-transparent">Duration</th>
                                        <th className="bg-transparent">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentRuns.map((run, index) => (
                                        <tr key={run.id} className="hover:bg-black/5 border-b border-black/5 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${500 + index * 80}ms` }}>
                                            <td className="font-mono text-primary bg-transparent">{run.id}</td>
                                            <td className="bg-transparent">{run.branch}</td>
                                            <td className="bg-transparent">
                                                <div className={`flex items-center gap-2 font-semibold ${statusMap[run.status].color}`}>
                                                    {statusMap[run.status].icon} {run.status}
                                                </div>
                                            </td>
                                            <td className="bg-transparent">{run.duration}</td>
                                            <td className="text-neutral-content/60 bg-transparent">{run.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Test Analytics Chart */}
                    <div className="bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-black/10 shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <h2 className="text-xl font-bold mb-4 text-base-content">Tests Passed Over Time</h2>
                        <BarChartPlaceholder />
                    </div>
                </div>
            </div>

            <AppFooter />
        </div>
    );
}