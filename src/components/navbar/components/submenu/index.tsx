import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalState } from "@/context";
import Link from 'next/link';

export default function ExampleCollapsibleList() {

  const [open, setOpen] = React.useState(false);
  const { productCategory } = useGlobalState();

  return (
    <Box
      sx={{
        width: 320,
        pl: '24px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 500,
      }}
    >
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },

          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',

          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              className=" text-black hover:font-bold"
              sx={{
                fontWeight: open ? 'bold' : '500',
                color: open ? 'text.primary' : 'inherit',
                fontFamily: 'Jost, sans-serif',  // Apply Jost font to Typography
                fontSize: '16px',
              }}
            >
              All Category
            </Typography>
          </ListItem>
          {open && (
            <List sx={{ '--ListItem-paddingY': '2px', fontSize: '16px' }}>
              {productCategory?.map((category, categoryIndex) => (
                <ListItem key={categoryIndex}>
                  <ListItemButton className="text-sm px-4 py-2 xl:py-0 text-black hover:font-bold" sx={{ fontFamily: 'Jost, sans-serif' }}>
                    <Link href={`/search/${category?.category_name}`}>{category?.category_name}</Link>
                  </ListItemButton>
                </ListItem>
              ))}
              {/* <div className="">
                {productCategory?.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="w-1/4 pl-5">
                    <li className="px-4 leading-8 font-medium hover:font-bold text-[#757575] hover:text-black">
                      <Link href={`/search/${category?.category_name}`}>{category?.category_name}</Link>
                    </li>
                  </div>
                ))}
              </div> */}
            </List>
          )}
        </ListItem>
      </List>

    </Box>
  );
}
