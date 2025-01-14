import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  ROUTE_ADMIN_PANEL,
  ROUTE_LICENSE_DASHBOARD,
  ROUTE_LICENSE_SEARCH,
  ROUTE_LICENSE_ACTIVATE,
} from "Routes";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CustomSeparator() {
  const location = useLocation();
  const isLicensePresent = useSelector((state) => state.customCard.activePage).modifyLicenseWizard > 0;
  const license = useSelector((state) => state.modifyKey.licenseDetails).oldLicense;
  
  const navMap = new Map();
  navMap.set("/", {
    nav: false,
    content: false,
  });
  navMap.set("/license", {
    nav: false,
    content: false,
  });
  navMap.set("/license/generate", {
    nav: true,
    content: true,
    title: "Generate Product Key",
  });
  navMap.set("/license/modify", {
    nav: true,
    content: true,
    title: "License Key Modification",
    isSubtitlePresnt : isLicensePresent,
    subtitle: license,
  });

  navMap.set(ROUTE_LICENSE_SEARCH, {
    nav: true,
    content: true,
    title: "License Key Explorer",
  });

  navMap.set(ROUTE_ADMIN_PANEL, {
    nav: true,
    content: true,
    title: "Admin Area",
  });
  navMap.set(ROUTE_LICENSE_ACTIVATE, {
    nav: true,
    content: true,
    title: "License Key Activation",
  });

  const [data, setData] = useState(navMap.get("/"));

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
  }, [location, isLicensePresent, license]);

  const breadcrumbs = [
    <Typography id="header-nav1" key="1">
      <Link
        to={ROUTE_LICENSE_DASHBOARD}
        style={{ color: "white", textDecoration: "none" }}
      >
        Internal Licensing Tools
      </Link>
    </Typography>,
    data.nav && data.content && (
      <Typography id="header-nav2" key="2" color="white">
        {data.title}
      </Typography>
    ),
    data.nav &&
      data.content &&
      data.isSubtitlePresnt &&(
        <Typography id="header-nav3" key="3" color="white">
          {data.subtitle}
        </Typography>
      ),
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowRightIcon style={{ color: "white" }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
