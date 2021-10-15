import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Prop()
    name : string;

    @Prop()
    namespace: string;

    @Prop()
    createdAt : string;

    @Prop()
    message :string;


}

export const EventSchema = SchemaFactory.createForClass(Event);s