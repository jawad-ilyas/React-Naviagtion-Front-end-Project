const FundamentalsPages = [
    { name: "Getting started", link: "/docs/gettingstarted" },
    { name: "Hello React Navigation", link: "/helloreactnavigation" },
    { name: "Moving between screens", link: "/movingbetweenscreens" },
    { name: "Passing parameters to routes", link: "/passingparameterstoroutes" },
    { name: "Configuring the header bar", link: "/configuringtheheaderbar" },
    { name: "Header buttons", link: "/headerbuttons" },
    { name: "Nesting navigators", link: "/nestingnavigators" },
    { name: "Navigation lifecycle", link: "/navigationlifecycle" },
    { name: "Next steps", link: "/nextsteps" },
    { name: "Glossary of terms", link: "/glossaryofterms" },
    { name: "Troubleshooting", link: "/troubleshooting" },
    { name: "Limitations", link: "/limitations" }
];
const GuidesPages = [
    { name: "Tab navigation", link: "/" },
    { name: "Drawer navigation", link: "/" },
    { name: "Authentication flows", link: "/" },
    { name: "Supporting safe areas", link: "/" },
    { name: "Hiding tab bar in specific screens", link: "/" },
    { name: "Different status bar configuration based on route", link: "/" },
    { name: "Opening a modal", link: "/" },
    { name: "Multiple drawers", link: "/" },
    { name: "Screen options with nested navigators", link: "/" },
    { name: "Custom Android back button behavior", link: "/" },
    { name: "Animating elements between screens", link: "/" },
    { name: "Preventing going back", link: "/" },
    { name: "Call a function when focused screen changes", link: "/" },
    { name: "Access the navigation prop from any component", link: "/" },
    { name: "Navigating without the navigation prop", link: "/" },
    { name: "Deep linking", link: "/" },
    { name: "Configuring links", link: "/" },
    { name: "Web support", link: "/" },
    { name: "Server rendering", link: "/" },
    { name: "Screen tracking for analytics", link: "/" },
    { name: "Themes", link: "/" },
    { name: "State persistence", link: "/" },
    { name: "Testing with Jest", link: "/" },
    { name: "Type checking with TypeScript", link: "/" },
    { name: "Redux integration", link: "/" },
    { name: "MobX State Tree integration", link: "/" },
    { name: "Upgrading from 5.x", link: "/" }
];
const NavigatorsPages = [
    { name: "Stack", link: "/" },
    { name: "Native Stack", link: "/" },
    { name: "Drawer", link: "/" },
    { name: "Bottom Tabs", link: "/" },
    { name: "Material Bottom Tabs", link: "/" },
    { name: "Material Top Tabs", link: "/" }
];
const LibrariesPages = [
    { name: "Developer tools", link: "/" },
    { name: "Elements", link: "/" },
    { name: "Tab View", link: "/" },
    { name: "Drawer Layout", link: "/" }
];
const APIReferencePages = [
    { name: "NavigationContainer", link: "/" },
    { name: "ServerContainer", link: "/" },
    { name: "Group", link: "/" },
    { name: "Screen", link: "/" },
    { name: "Options for screens", link: "/" },
    { name: "Route prop", link: "/" },
    { name: "Navigation prop", link: "/" },
    { name: "NavigationContext", link: "/" },
    { name: "Navigation events", link: "/" },
    { name: "Navigation state", link: "/" },
    { name: "Link", link: "/" }
];
const BuildYourOwnNavigatorPages = [
    { name: "Custom routers", link: "/" },
    { name: "Custom navigators", link: "/" }
];
const AdditionalResourcesPages = [
    { name: "Migration Guides", link: "/" },
    { name: "Navigation Solutions and Community Libraries", link: "/" },
    { name: "More Resources", link: "/" }
];
const MetaPages = [
    { name: "Pitch & anti-pitch", link: "/" },
    { name: "Apps using React Navigation", link: "/" },
    { name: "Contributing", link: "/" }
];







const sideBarData = [
    {
        title: "Fundamentals",
        pages: FundamentalsPages
    },
    {
        title: "Guides",
        pages: GuidesPages
    },

    {
        title: "Navigators",
        pages: NavigatorsPages
    },
    {
        title: "Libraries",
        pages: LibrariesPages
    },

    {
        title: "API Reference",
        pages: APIReferencePages
    },
    {
        title: "Build Your Own Navigator",
        pages: BuildYourOwnNavigatorPages
    },
    {
        title: "Additional Resources",
        pages: AdditionalResourcesPages
    },

   
    {
        title: "Meta",
        pages: MetaPages
    },
];

export { sideBarData }