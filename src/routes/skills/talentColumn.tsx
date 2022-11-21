import { component$, useStyles$, $ } from "@builder.io/qwik";
import { TooltipStore } from ".";
import style from "./skills.css?inline";

export interface TalentColumnProps {
  isActive: boolean;
  tooltipStore?: TooltipStore;
  items: {
    name: string;
    iconClass?: string;
    tooltip?: string;
  }[];
}

export const TalentColumn = component$((props: TalentColumnProps) => {
  useStyles$(style);

  const createItems$ = $(() => {
    const items: any[] = [];
    for (let index = 0; index < props.items.length; index++) {
      const item = props.items[index];

      // This flips the order on inactive so they fade out from bottom to top
      const order = props.isActive ? index + 1 : props.items.length - index;

      switch (item.name) {
        case "link":
          items.push(
            <>
              <div
                style={{ "--order": order }}
                className={props.isActive ? "talent-link active" : "talent-link"}
              >
                <div className="link-line"></div>
              </div>
            </>
          );
          break;

        case "space":
          items.push(
            <>
              <div
                style={{ "--order": order }}
                className={
                  props.isActive ? "talent-space active" : "talent-space"
                }
              ></div>
            </>
          );
          break;

        case "empty":
          items.push(
            <>
              <div
                style={{ "--order": order }}
                className={
                  props.isActive ? "talent-empty active" : "talent-empty"
                }
              ></div>
            </>
          );
          break;

        default:
          items.push(
            <TalentItem
              name={item.name}
              order={order}
              isActive={props.isActive}
              iconClass={item.iconClass}
              tooltip={item.tooltip}
              tooltipStore={props.tooltipStore}
            />
          );
          break;
      }
    }
    return items;
  });

  return (
    <>
      <div className={props.isActive ? "talent-column active" : "talent-column"}>
        {createItems$()}
      </div>
    </>
  );
});

interface TalentItemProps {
  name: string;
  order: number;
  isActive: boolean;
  iconClass?: string;
  tooltip?: string;
  tooltipStore?: TooltipStore;
}

export const TalentItem = component$((props: TalentItemProps) => {
  useStyles$(style);

  const onClickItem$ = $(() => {
    if (props.tooltipStore) {
      if (props.tooltip) {
        if (props.tooltipStore.text != props.tooltip) {
          props.tooltipStore.text = props.tooltip;
          props.tooltipStore.title = props.name;
        } else {
          props.tooltipStore.text = "";
          props.tooltipStore.title = "";
        }
      } else {
        props.tooltipStore.text = "";
        props.tooltipStore.title = "";
      }
    }
  });

  return (
    <>
      <div
        style={{ "--order": props.order }}
        className={props.isActive ? "talent-item active" : "talent-item"}
        onClick$={onClickItem$}
      >
        {
          props.iconClass && <i class={props.iconClass + ""}></i> // For some reason withtout the "" this causes Qwik to crash
        }
        <span>{props.name}</span>
      </div>
    </>
  );
});
