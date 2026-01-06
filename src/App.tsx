import { useState, useEffect } from 'react';
import { 
  Button, 
  Input, 
  Select, 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell, 
  Modal, 
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Kbd,
  Progress,
  Trend,
  Dropdown,
  NotificationItem,
  Skeleton,
  Tooltip,
  Separator,
  Chip,
  Avatar,
  Alert,
  Spinner
} from './components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const tableData = [
    { id: 1, name: 'Project Alpha', client: 'Acme Corp', status: 'In Progress', type: 'SaaS' },
    { id: 2, name: 'Beta Launch', client: 'Global Tech', status: 'Completed', type: 'B2B' },
    { id: 3, name: 'Gamma Portal', client: 'Industries Ltd', status: 'Review', type: 'Enterprise' },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-secondary-50 dark:bg-secondary-950 text-secondary-950 dark:text-secondary-100 flex transition-colors duration-300 font-sans">
        {/* Functional Hub Sidebar */}
        <div className="hidden lg:flex w-20 bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-800 flex-col items-center py-8 justify-between sticky top-0 h-screen">
          <div className="flex flex-col items-center gap-10">
            {/* System Logo */}
            <div className="w-10 h-10 bg-primary-600 rounded-xl shadow-lg shadow-primary-500/20 flex items-center justify-center text-white ring-2 ring-primary-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>

            {/* Social & Source Links */}
            <nav className="flex flex-col items-center gap-4">
              <Tooltip content="GitHub Profile" position="right">
                <a 
                  href="https://github.com/AndreaP2A/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-secondary-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </Tooltip>

              <Tooltip content="Source Code" position="right">
                <a 
                  href="https://github.com/AndreaP2A/react-b2b-ui-design-system" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-secondary-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                  </svg>
                </a>
              </Tooltip>

              <Tooltip content="LinkedIn Profile" position="right">
                <a 
                  href="https://www.linkedin.com/in/andrea-porche/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-secondary-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </Tooltip>
            </nav>
          </div>

          {/* User Presence */}
          <div className="flex flex-col items-center gap-6">
            <Separator className="w-8" />
            <Tooltip content="Alex Lee (Admin)" position="right">
              <div className="cursor-pointer hover:ring-2 hover:ring-primary-500/50 rounded-full transition-all">
                <Avatar size="md" fallback="AL" status="online" />
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 lg:py-20 space-y-12">
            
            {/* Hero Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  v1.1.0 Stable
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
                  React B2B UI Design System
                </h1>
                <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl leading-relaxed">
                  A minimalist, high-performance UI library built with React 19 and Tailwind 4.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Dropdown 
                  trigger={
                    <button className="p-2 rounded-xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-sm hover:ring-2 hover:ring-primary-500/50 transition-all text-secondary-500 relative">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                      </svg>
                      <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full border-2 border-white dark:border-secondary-900"></span>
                    </button>
                  }
                >
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-secondary-100 dark:border-secondary-800 flex justify-between items-center">
                      <span className="font-bold text-sm">Notifications</span>
                      <span className="text-[10px] text-primary-600 font-bold uppercase tracking-widest cursor-pointer hover:underline">Mark all read</span>
                    </div>
                    <NotificationItem 
                      title="System Update" 
                      description="Platform core migrated to React 19 concurrent mode." 
                      time="2m ago"
                    />
                    <NotificationItem 
                      title="Security Alert" 
                      description="New login detected from Brussels, Belgium." 
                      time="1h ago"
                      isRead
                    />
                    <NotificationItem 
                      title="Asset Export" 
                      description="The PDF report for 'Project Alpha' is ready for download." 
                      time="5h ago"
                      isRead
                    />
                    <div className="px-4 py-2 text-center border-t border-secondary-100 dark:border-secondary-800">
                      <span className="text-xs text-secondary-500 font-medium cursor-pointer hover:text-primary-600 transition-colors">See all activity</span>
                    </div>
                  </div>
                </Dropdown>

                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-sm hover:ring-2 hover:ring-primary-500/50 transition-all flex items-center gap-2 px-4 group"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {theme === 'dark' ? (
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-amber-500" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-indigo-600" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                    )}
                  </div>
                  <span className="text-sm font-semibold capitalize">{theme} Mode</span>
                </button>
              </div>
            </header>

            {/* Navigation Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="overview">System Overview</TabsTrigger>
                <TabsTrigger value="components">Component Audit</TabsTrigger>
                <TabsTrigger value="intelligence">Data Intelligence</TabsTrigger>
                <TabsTrigger value="settings">System Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <h3 className="font-bold text-secondary-900 dark:text-white">Active Sessions</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end gap-3">
                          <div className="text-3xl font-bold text-primary-600">1,284</div>
                          <Trend value={12} size="sm" className="mb-1" />
                        </div>
                        <p className="text-sm text-secondary-500 mt-1">Growth since last login</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="font-bold text-secondary-900 dark:text-white">System Uptime</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end gap-3">
                          <div className="text-3xl font-bold text-emerald-600">99.99%</div>
                          <Trend value={0.01} size="sm" className="mb-1" />
                        </div>
                        <p className="text-sm text-secondary-500 mt-1">Status: Operational</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="font-bold text-secondary-900 dark:text-white">Resource Usage</h3>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-end gap-3">
                          <div className="text-3xl font-bold text-secondary-900 dark:text-white">42%</div>
                          <Trend value={-5.2} size="sm" className="mb-1" />
                        </div>
                        <Progress value={42} size="sm" variant="primary" />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between border-b border-secondary-100 dark:border-secondary-800">
                        <h3 className="font-bold text-secondary-900 dark:text-white">Service Health</h3>
                        <Chip color="success" variant="dot">All Systems Nominal</Chip>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Table>
                          <TableBody>
                            <TableRow className="border-none">
                              <TableCell className="text-xs font-semibold">API Gateway</TableCell>
                              <TableCell><Badge variant="success">Operational</Badge></TableCell>
                              <TableCell className="text-right text-xs text-secondary-500">12ms</TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                              <TableCell className="text-xs font-semibold">Worker Nodes</TableCell>
                              <TableCell><Badge variant="success">Operational</Badge></TableCell>
                              <TableCell className="text-right text-xs text-secondary-500">24 Nodes</TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                              <TableCell className="text-xs font-semibold">Database Cluster</TableCell>
                              <TableCell><Badge variant="warning">Latency</Badge></TableCell>
                              <TableCell className="text-right text-xs text-secondary-500">142ms</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="border-b border-secondary-100 dark:border-secondary-800">
                        <h3 className="font-bold text-secondary-900 dark:text-white">Recent Activity</h3>
                      </CardHeader>
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <Avatar size="sm" fallback="JD" status="online" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold">Jane Doe <span className="font-normal text-secondary-500">modified</span> API keys</p>
                            <p className="text-[10px] text-secondary-400 uppercase font-bold">2 minutes ago</p>
                          </div>
                          <Chip variant="outline">Security</Chip>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="sm" fallback="BK" status="away" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold">Brian King <span className="font-normal text-secondary-500">deployed</span> v1.1.0-RC</p>
                            <p className="text-[10px] text-secondary-400 uppercase font-bold">45 minutes ago</p>
                          </div>
                          <Chip variant="outline" color="primary">DevOps</Chip>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="sm" fallback="AL" status="busy" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold">Alex Lee <span className="font-normal text-secondary-500">deleted</span> project 'Beta'</p>
                            <p className="text-[10px] text-secondary-400 uppercase font-bold">1 hour ago</p>
                          </div>
                          <Chip variant="outline" color="danger">Storage</Chip>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="components" className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Left Column: Documentation & Components */}
                  <div className="lg:col-span-8 space-y-12">
                    
                    {/* Foundations Section */}
                    <section id="foundations" className="space-y-12">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Design Foundations</h2>
                        <p className="text-secondary-500 text-sm">The core building blocks and visual rules of the system.</p>
                      </div>

                      <div className="space-y-8">
                        {/* Colors */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Color Palette</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="space-y-2">
                              <div className="h-16 rounded-xl bg-primary-600 shadow-inner flex items-end p-2"><span className="text-[10px] font-bold text-white/50 uppercase">Primary / 600</span></div>
                              <div className="h-2 rounded-full flex gap-1">
                                <div className="h-full flex-1 bg-primary-100 rounded-full" />
                                <div className="h-full flex-1 bg-primary-400 rounded-full" />
                                <div className="h-full flex-1 bg-primary-700 rounded-full" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-16 rounded-xl bg-secondary-900 shadow-inner dark:bg-white flex items-end p-2"><span className="text-[10px] font-bold text-secondary-500 uppercase">Secondary / 900</span></div>
                              <div className="h-2 rounded-full flex gap-1">
                                <div className="h-full flex-1 bg-secondary-100 rounded-full" />
                                <div className="h-full flex-1 bg-secondary-400 rounded-full" />
                                <div className="h-full flex-1 bg-secondary-700 rounded-full" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-16 rounded-xl bg-emerald-600 shadow-inner flex items-end p-2"><span className="text-[10px] font-bold text-white/50 uppercase">Success / 600</span></div>
                              <div className="h-2 rounded-full flex gap-1">
                                <div className="h-full flex-1 bg-emerald-100 rounded-full" />
                                <div className="h-full flex-1 bg-emerald-400 rounded-full" />
                                <div className="h-full flex-1 bg-emerald-700 rounded-full" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-16 rounded-xl bg-red-600 shadow-inner flex items-end p-2"><span className="text-[10px] font-bold text-white/50 uppercase">Danger / 600</span></div>
                              <div className="h-2 rounded-full flex gap-1">
                                <div className="h-full flex-1 bg-red-100 rounded-full" />
                                <div className="h-full flex-1 bg-red-400 rounded-full" />
                                <div className="h-full flex-1 bg-red-700 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Typography */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Typography Scale</h4>
                          <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-4 font-sans">
                            <div className="flex items-baseline gap-4">
                              <span className="text-4xl font-extrabold tracking-tight">H1 Heading</span>
                              <span className="text-[10px] text-secondary-400 uppercase font-mono">4xl / extrabold / -0.025em</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                              <span className="text-2xl font-bold">H2 Subtitle</span>
                              <span className="text-[10px] text-secondary-400 uppercase font-mono">2xl / bold</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                              <span className="text-base text-secondary-700 dark:text-secondary-300">Body Content - Professional UI prioritizing readability and clean information architecture.</span>
                              <span className="text-[10px] text-secondary-400 uppercase font-mono">base / 400</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Buttons Section */}
                    <section id="buttons" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Interactive Elements</h2>
                        <p className="text-secondary-500">Predictable button states for high-frequency workflows.</p>
                      </div>
                      <div className="p-8 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-sm space-y-8">
                        <div className="flex flex-wrap gap-4 items-center">
                          <Button variant="primary">Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="danger">Danger</Button>
                          <Button variant="ghost">Ghost</Button>
                        </div>
                        <div className="flex flex-wrap gap-6 items-center pt-6 border-t border-secondary-100 dark:border-secondary-800">
                          <Button size="sm">Small</Button>
                          <Button size="md">Base</Button>
                          <Button size="lg">Large</Button>
                          <Button isLoading variant="secondary">Processing</Button>
                          <Button variant="link">External Link</Button>
                        </div>
                      </div>
                    </section>

                    {/* Feedback & Status Section */}
                    <section id="feedback" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Feedback & Status</h2>
                        <p className="text-secondary-500">Communication patterns for system states and user identity.</p>
                      </div>
                      
                      <div className="space-y-8">
                        {/* Alerts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Alert variant="info" title="System Insight">New data processing units are now active in EU-West.</Alert>
                          <Alert variant="success" title="Backup Complete">Your workspace was successfully archived.</Alert>
                          <Alert variant="warning" title="API Deprecation">Legacy v1 endpoints will reach EOL in 30 days.</Alert>
                          <Alert variant="danger" title="Access Denied">You do not have permission to sync this asset.</Alert>
                        </div>

                        {/* Avatars & Chips */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Identity / Avatars</h4>
                            <div className="flex flex-wrap items-center gap-4">
                              <Avatar size="sm" fallback="JD" status="online" />
                              <Avatar size="md" fallback="AP" status="busy" />
                              <Avatar size="lg" fallback="TS" status="away" />
                              <Avatar size="xl" fallback="MX" status="offline" />
                            </div>
                          </div>
                          <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Indicators / Chips</h4>
                            <div className="flex flex-wrap items-center gap-3">
                              <Chip color="primary" onRemove={() => {}}>React</Chip>
                              <Chip color="success">Verified</Chip>
                              <Chip color="warning" variant="outline">Pending</Chip>
                              <Chip color="danger" variant="dot">Critical Error</Chip>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Navigation Section */}
                    <section id="navigation" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Navigation & Hierarchy</h2>
                        <p className="text-secondary-500">Structural patterns for organizing multiple views and contexts.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Contextual Menus</h4>
                           <div className="flex gap-4">
                              <Dropdown trigger={<Button variant="secondary">Open Dropdown</Button>}>
                                <div className="p-2 w-48">
                                   <div className="px-3 py-1.5 text-xs font-bold text-secondary-400 uppercase">Actions</div>
                                   <button className="w-full text-left px-3 py-2 text-sm hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md transition-colors">Edit Asset</button>
                                   <button className="w-full text-left px-3 py-2 text-sm hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md transition-colors">Duplicate</button>
                                   <Separator className="my-1" />
                                   <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">Delete Permanently</button>
                                </div>
                              </Dropdown>
                           </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Command Shortcuts</h4>
                           <div className="flex flex-wrap gap-4 items-center">
                              <div className="flex items-center gap-2 text-xs font-medium text-secondary-500">
                                Global Search <div className="flex gap-1"><Kbd>CMD</Kbd><Kbd>K</Kbd></div>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-medium text-secondary-500">
                                Save Progress <div className="flex gap-1"><Kbd>S</Kbd></div>
                              </div>
                           </div>
                        </div>
                      </div>
                    </section>
                    
                    {/* Form Elements */}
                    <section id="forms" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Form Foundations</h2>
                        <p className="text-secondary-500">Accessible data entry components with validation feedback.</p>
                      </div>
                      <div className="p-8 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-sm space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input 
                            id="email-showcase"
                            label="Email Address" 
                            placeholder="e.g. j.doe@example.com" 
                            helperText="Use your professional email."
                          />
                          <Select 
                            id="role-showcase"
                            label="User Permissions"
                            options={[
                              { label: 'Administrator', value: 'admin' },
                              { label: 'Project Manager', value: 'manager' },
                              { label: 'Read Only', value: 'viewer' },
                            ]}
                          />
                          <Input 
                            id="error-showcase"
                            label="Postal Code" 
                            defaultValue="ABC-123" 
                            error="Format must be 5-digit numeric." 
                          />
                          <Input 
                            id="disabled-showcase"
                            label="System ID (Read Only)" 
                            disabled 
                            value="DS-2026-X99" 
                          />
                        </div>
                      </div>
                    </section>

                    {/* Data Display */}
                    <section id="tables" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Data Structures</h2>
                        <p className="text-secondary-500">Dense, readable tables for complex information management.</p>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Asset</TableHead>
                            <TableHead>Owner</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((project) => (
                            <TableRow key={project.id}>
                              <TableCell className="font-semibold text-secondary-900 dark:text-white">{project.name}</TableCell>
                              <TableCell>{project.client}</TableCell>
                              <TableCell>
                                <Badge variant={project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'info' : 'warning'}>
                                  {project.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="text-xs">Edit</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </section>
                    
                    {/* Loading & Async Section */}
                    <section id="loading" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Loading & Async</h2>
                        <p className="text-secondary-500 text-sm">Visual feedback for indeterminate wait times and background processing.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Spinners / Indeterminate</h4>
                           <div className="flex items-center gap-8 text-primary-600">
                              <Spinner size="sm" />
                              <Spinner size="md" />
                              <Spinner size="lg" />
                              <Spinner size="xl" />
                           </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 space-y-6">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-400">Skeleton / Content Ghosting</h4>
                           <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                 <Skeleton variant="circular" className="w-10 h-10" />
                                 <div className="space-y-1 flex-1">
                                    <Skeleton variant="text" className="w-1/3 h-2" />
                                    <Skeleton variant="text" className="w-1/4 h-2" />
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                    </section>
                    
                    {/* Data Visualization */}
                    <section id="viz" className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Data Visualization</h2>
                        <p className="text-secondary-500">Atomic indicators for system health and performance trends.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-400">Progress Indicators</h4>
                          <div className="space-y-6 p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800">
                             <Progress value={75} showValue variant="primary" />
                             <Progress value={45} size="sm" variant="success" />
                             <Progress value={90} size="lg" variant="danger" />
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-400">Trend Analysis</h4>
                          <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800">
                             <Trend value={24.5} label="Revenue" />
                             <Trend value={-12.8} label="Churn" />
                             <Trend value={0.5} label="Latency" />
                             <Trend value={1.2} label="Uptime" />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Utilities & States */}
                  <div className="lg:col-span-4 space-y-12">
                    <div className="sticky top-12 space-y-12">
                    <section className="p-6 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-sm space-y-6">
                      <h3 className="font-bold text-lg text-secondary-900 dark:text-white">System Overlay</h3>
                      <p className="text-secondary-500 dark:text-secondary-400 text-sm leading-relaxed">
                        Test the modal implementation and portal rendering.
                      </p>
                      <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(true)}>
                        Trigger Modal
                      </Button>
                    </section>

                      <section className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-widest text-secondary-400">Status Library</h3>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="default">Idle</Badge>
                          <Badge variant="success">Active</Badge>
                          <Badge variant="warning">Alert</Badge>
                          <Badge variant="danger">Critical</Badge>
                          <Badge variant="info">Synced</Badge>
                        </div>
                      </section>

 

                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="intelligence" className="pt-6">
                <div className="space-y-8">
                  <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Business Intelligence</h2>
                      <p className="text-secondary-500 text-sm">Advanced analytical views and data hierarchy.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tooltip content="Export to Excel/BI Source" position="bottom">
                        <Button variant="secondary" size="sm" className="h-9">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                          Export Data
                        </Button>
                      </Tooltip>
                      <Button size="sm" className="h-9">Generate Insight</Button>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filter Sidebar Mockup */}
                    <Card className="lg:col-span-1 h-fit">
                      <CardHeader className="py-3 px-4">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-secondary-400">Analysis Slicers</h4>
                      </CardHeader>
                      <CardContent className="p-4 space-y-4">
                        <Input label="Search Dimension" placeholder="Filter region..." size="sm" />
                        <Select 
                          label="Global Region" 
                          size="sm" 
                          options={[
                            { label: 'All Regions', value: 'all' },
                            { label: 'North America', value: 'na' },
                            { label: 'EMEA', value: 'emea' },
                            { label: 'APAC', value: 'apac' },
                          ]} 
                        />
                        <Separator />
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-secondary-600 dark:text-secondary-400 uppercase tracking-tight">Time Horizon</label>
                          <div className="grid grid-cols-2 gap-2">
                             <Button variant="secondary" size="sm" className="text-[10px] h-7">Q1 2026</Button>
                             <Button variant="primary" size="sm" className="text-[10px] h-7">Q2 2026</Button>
                          </div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold text-secondary-500 uppercase">
                            <span>Data Freshness</span>
                            <span className="text-emerald-500">Live</span>
                          </div>
                          <Skeleton variant="text" className="h-1.5" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Main Analytics Area */}
                    <div className="lg:col-span-3 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-5 border-l-4 border-l-primary-500">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-secondary-500">Predicted Revenue</span>
                                <Tooltip content="AI projection based on last 6 months seasonality." position="right">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-secondary-400 cursor-help"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                                </Tooltip>
                              </div>
                              <div className="text-3xl font-bold text-secondary-900 dark:text-white">$4.2M</div>
                            </div>
                            <Trend value={18.4} size="md" />
                          </div>
                        </Card>
                        <Card className="p-5 border-l-4 border-l-emerald-500">
                          <div className="flex justify-between items-start">
                             <div className="space-y-1">
                               <span className="text-sm font-semibold text-secondary-500">Market Penetration</span>
                               <div className="text-3xl font-bold text-secondary-900 dark:text-white">68.2%</div>
                             </div>
                             <Trend value={2.1} size="md" />
                          </div>
                          <div className="mt-4">
                            <Progress value={68.2} size="sm" variant="success" />
                          </div>
                        </Card>
                      </div>

                      <section className="space-y-4">
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white">Regional Performance Matrix</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[200px]">Region</TableHead>
                              <TableHead>Market Health</TableHead>
                              <TableHead>Load Balance</TableHead>
                              <TableHead className="text-right">Variance</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-semibold">North America (HQ)</TableCell>
                              <TableCell>
                                <Progress value={85} size="sm" variant="primary" />
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Skeleton variant="circular" className="w-2 h-2" />
                                  <span className="text-xs">Optimizing Cluster...</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right"><Trend value={14.8} size="sm" /></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">European Union</TableCell>
                              <TableCell>
                                <Progress value={92} size="sm" variant="success" />
                              </TableCell>
                              <TableCell>
                                <div className="text-xs text-secondary-500">Wait: <span className="font-mono text-secondary-900 dark:text-white">12ms</span></div>
                              </TableCell>
                              <TableCell className="text-right"><Trend value={-3.2} size="sm" /></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">Asia-Pacific</TableCell>
                              <TableCell>
                                <Progress value={34} size="sm" variant="danger" />
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <Skeleton variant="text" className="w-24 h-1.5" />
                                  <Skeleton variant="text" className="w-16 h-1.5" />
                                </div>
                              </TableCell>
                              <TableCell className="text-right"><Trend value={0} size="sm" /></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </section>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="pt-6">
                <div className="max-w-4xl space-y-8">
                  {/* User Profile Section */}
                  <section className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">User Profile</h2>
                      <p className="text-secondary-500">Manage your personal information and preferences.</p>
                    </div>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                          <div className="relative">
                            <Avatar size="xl" fallback="AL" />
                            <button className="absolute -bottom-1 -right-1 p-1.5 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M12 5v14M5 12h14"/></svg>
                            </button>
                          </div>
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <Input label="Display Name" defaultValue="Alex Lee" />
                            <Input label="Email Address" defaultValue="a.lee@enterprise.io" />
                            <Select label="Language" options={[{label: 'English (US)', value: 'en'}, {label: 'French (FR)', value: 'fr'}]} />
                            <Select label="Timezone" options={[{label: 'GMT +1 (Brussels)', value: 'gmt1'}]} />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-3 border-t border-secondary-100 dark:border-secondary-800">
                        <Button variant="secondary" size="sm">Discard</Button>
                        <Button variant="primary" size="sm">Update Profile</Button>
                      </CardFooter>
                    </Card>
                  </section>

                  {/* Team Management */}
                  <section className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Team Management</h2>
                      <p className="text-secondary-500">Invite and manage permissions for your organization.</p>
                    </div>
                    <Card>
                      <CardContent className="p-0">
                        <Table>
                          <TableBody>
                            <TableRow className="border-none">
                              <TableCell className="flex items-center gap-3">
                                <Avatar size="sm" fallback="JD" />
                                <div>
                                  <div className="text-sm font-semibold">Jane Doe</div>
                                  <div className="text-xs text-secondary-500">Admin</div>
                                </div>
                              </TableCell>
                              <TableCell><Chip color="success">Active</Chip></TableCell>
                              <TableCell className="text-right"><Button variant="ghost" size="sm">Manage</Button></TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                              <TableCell className="flex items-center gap-3">
                                <Avatar size="sm" fallback="BK" />
                                <div>
                                  <div className="text-sm font-semibold">Brian King</div>
                                  <div className="text-xs text-secondary-500">Editor</div>
                                </div>
                              </TableCell>
                              <TableCell><Chip color="warning">Pending</Chip></TableCell>
                              <TableCell className="text-right"><Button variant="ghost" size="sm">Manage</Button></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </section>

                  <section className="space-y-6">
                    <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Global Preferences</h2>
                    <p className="text-secondary-500">Manage user experience and system-wide configurations.</p>
                    </div>
                    
                    <Card>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="font-semibold text-secondary-900 dark:text-white">Push Notifications</h4>
                            <p className="text-sm text-secondary-500">Receive real-time alerts on console activities.</p>
                          </div>
                          <Switch checked={notifications} onCheckedChange={setNotifications} />
                        </div>
                        <div className="border-t border-secondary-100 dark:border-secondary-800 pt-6">
                          <Input 
                            label="Maintenance Webhook" 
                            placeholder="https://api.system.com/hooks/..."
                            defaultValue="https://internal.ops/v1/alert"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-3">
                        <Button variant="secondary" size="sm">Reset</Button>
                        <Button variant="primary" size="sm">Apply Global Changes</Button>
                      </CardFooter>
                    </Card>
                  </section>

                  {/* Danger Zone */}
                  <section className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-red-600">Danger Zone</h2>
                      <p className="text-secondary-500">Critical actions that involve data loss or account termination.</p>
                    </div>
                    <Alert variant="danger" title="Caution" icon>
                      Actions in this section cannot be undone. Please ensure you have backed up your configuration.
                    </Alert>
                    <Card className="border-red-200 dark:border-red-900/30">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-semibold text-secondary-900 dark:text-white">Clear Audit Logs</h4>
                          <p className="text-sm text-secondary-500">Permanently delete all system event history.</p>
                        </div>
                        <Button variant="danger" size="sm">Delete All Logs</Button>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </TabsContent>
            </Tabs>

            <Modal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              title="System Configuration"
              footer={
                <>
                  <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Discard</Button>
                  <Button onClick={() => setIsModalOpen(false)}>Apply Settings</Button>
                </>
              }
            >
              <div className="space-y-4">
                <p className="text-sm">
                  You are about to modify global system parameters. This action will be logged in the audit trail.
                </p>
                <div className="flex items-center gap-2 p-3 bg-secondary-50 dark:bg-secondary-800 rounded-lg text-xs font-mono text-secondary-600 dark:text-secondary-400">
                  <Kbd>CMD</Kbd> + <Kbd>S</Kbd> to save quickly.
                </div>
                <Input label="Admin Password" type="password" placeholder="••••••••" />
              </div>
            </Modal>

            <footer className="pt-12 border-t border-secondary-200 dark:border-secondary-800 flex justify-between items-center text-sm text-secondary-500">
              <p>© 2026 React B2B UI Design System</p>
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><Kbd>v</Kbd> 1.1.0</span>
                <span>React 19 + Tailwind 4</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
