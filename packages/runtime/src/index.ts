import path from 'path';
import {
  Link,
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import type {
  RuntimePlugin,
  AppContext,
  PublicAppContext,
  AppConfig,
  RouteConfig,
  RouteItem,
  ServerContext,
  AppProvider,
  RouteWrapper,
  RenderMode,
  DistType,
  Loader,
  RouteWrapperConfig,
} from './types.js';
import Runtime from './runtime.js';
import runClientApp from './runClientApp.js';
import type { RunClientAppOptions } from './runClientApp.js';
import { useAppContext as useInternalAppContext, useAppData, AppContextProvider } from './AppContext.js';
import { getAppData } from './appData.js';
import { useData, useConfig } from './RouteContext.js';
import App from './App.js';
import {
  Meta,
  Title,
  Links,
  Scripts,
  Main,
  Data,
  usePageAssets,
} from './Document.js';
import type {
  MetaType,
  TitleType,
  LinksType,
  ScriptsType,
  DataType,
  MainType,
} from './Document.js';
import { createClientModuleProxy, registerServerReference } from './reactFlightWebpackReference.js';
import dataLoader, { defineDataLoader, defineServerDataLoader, defineStaticDataLoader, callDataLoader } from './dataLoader.js';
import getRequestContext from './requestContext.js';
import AppErrorBoundary from './AppErrorBoundary.js';
import getAppConfig, { defineAppConfig } from './appConfig.js';
import { routerHistory as history } from './history.js';
import KeepAliveOutlet from './KeepAliveOutlet.js';
import ClientOnly from './ClientOnly.js';
import useMounted from './useMounted.js';
import usePageLifecycle from './usePageLifecycle.js';
import { withSuspense, useSuspenseData } from './Suspense.js';
import { createRouteLoader, WrapRouteComponent, RouteErrorComponent, Await } from './routes.js';
import { createServerRoutes } from './ServerRouter.js';
import { RSCRouter } from './rsc-router.js';

function useAppContext() {
  console.warn('import { useAppContext } from \'@ice/runtime\'; is deprecated, please use import { useAppContext } from \'ice\'; instead.');
  return useInternalAppContext();
}

function usePublicAppContext(): PublicAppContext {
  const context = useInternalAppContext();

  const {
    appConfig,
    routePath,
    downgrade,
    documentOnly,
    renderMode,
  } = context;

  return {
    appConfig,
    routePath,
    downgrade,
    documentOnly,
    renderMode,
  };
}

export {
  getAppConfig,
  defineAppConfig,
  Runtime,
  RSCRouter,
  runClientApp,
  AppContextProvider,
  /**
   * @deprecated
   * Please use import { useAppContext } from \'ice\'; instead.
   */
  useAppContext,
  usePublicAppContext,
  useAppData,
  useData,
  getAppData,
  defineDataLoader,
  defineServerDataLoader,
  defineStaticDataLoader,
  useConfig,
  Meta,
  Title,
  Links,
  Scripts,
  Data,
  Main,
  usePageAssets,
  path,
  App,
  createClientModuleProxy,
  registerServerReference,
  createServerRoutes,
  // API for data-loader.
  dataLoader,
  callDataLoader,
  getRequestContext,
  // react-router-dom API
  Link,
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
  history,

  KeepAliveOutlet,
  AppErrorBoundary,
  ClientOnly,

  useMounted,
  usePageLifecycle,

  withSuspense,
  useSuspenseData,

  Await,

  createRouteLoader,
  WrapRouteComponent,
  RouteErrorComponent,
};

export type {
  RuntimePlugin,
  AppContext,
  AppConfig,
  RouteConfig,
  RouteWrapperConfig,
  RouteItem,
  ServerContext,
  AppProvider,
  RouteWrapper,
  RenderMode,
  DistType,
  Loader,
  RunClientAppOptions,
  MetaType,
  TitleType,
  LinksType,
  ScriptsType,
  DataType,
  MainType,
};
