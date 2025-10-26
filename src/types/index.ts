export interface SchemaOption {
  label: string;
  value: string;
}

export interface SchemaItem {
  value: string;
  label: string;
}

export interface SegmentData {
  segment_name: string;
  schema: Array<{ [key: string]: string }>;
}

