"use client";

import * as React from "react";
import { cn } from "./utils";

// ================= Tabs Component =================
function Tabs({ children, className, ...props }) {
  return (
    <div data-slot="tabs" className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

function TabsList({ children, className, ...props }) {
  return (
    <div data-slot="tabs-list" className={cn("flex border-b", className)} {...props}>
      {children}
    </div>
  );
}

function TabsTrigger({ children, className, ...props }) {
  return (
    <button
      data-slot="tabs-trigger"
      className={cn(
        "px-3 py-1 text-sm font-medium text-foreground hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ children, className, ...props }) {
  return (
    <div data-slot="tabs-content" className={cn("mt-2", className)} {...props}>
      {children}
    </div>
  );
}

// ================= Table Components =================
function Table(props) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn("w-full caption-bottom text-sm", props.className)} {...props} />
    </div>
  );
}

function TableHeader(props) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", props.className)} {...props} />;
}

function TableBody(props) {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", props.className)} {...props} />;
}

function TableFooter(props) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", props.className)}
      {...props}
    />
  );
}

function TableRow(props) {
  return (
    <tr
      data-slot="table-row"
      className={cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", props.className)}
      {...props}
    />
  );
}

function TableHead(props) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        props.className
      )}
      {...props}
    />
  );
}

function TableCell(props) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        props.className
      )}
      {...props}
    />
  );
}

function TableCaption(props) {
  return (
    <caption data-slot="table-caption" className={cn("text-muted-foreground mt-4 text-sm", props.className)} {...props} />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};