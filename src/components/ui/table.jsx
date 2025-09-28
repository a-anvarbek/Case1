"use client";

import * as React from "react";
import { cn } from "./utils";

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
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};