#!/usr/bin/env python3
"""
Age of Mythos - Image Generator
Generates 27 kingdom emblems and 27 hero portraits using PIL/Pillow.
"""

import os
import math
from PIL import Image, ImageDraw, ImageFont

# ─── Font paths ───────────────────────────────────────────────────────────────
FONT_GEORGIA   = "/System/Library/Fonts/Supplemental/Georgia.ttf"
FONT_ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_TNR       = "/System/Library/Fonts/Supplemental/Times New Roman.ttf"

BASE = (
    "/Users/smk/repos/age-of-mythos/content"
    "/volume-1-maha-parva/chapter-1-rise-of-legends"
    "/bharatavarsha/regions"
)

# ─── Colour helpers ───────────────────────────────────────────────────────────
def hex_to_rgb(h: str):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def draw_gradient_bg(draw, w, h, top_color, bot_color):
    for y in range(h):
        t = y / (h - 1)
        color = lerp_color(top_color, bot_color, t)
        draw.line([(0, y), (w, y)], fill=color)

# ─── Decorative helpers ───────────────────────────────────────────────────────
def draw_corner_ornaments(draw, w, h, color, size=18):
    """Small L-shaped ornaments in each corner."""
    lw = 2
    for cx, cy in [(0, 0), (w, 0), (0, h), (w, h)]:
        sx = 1 if cx == 0 else -1
        sy = 1 if cy == 0 else -1
        ox, oy = cx + sx*8, cy + sy*8
        draw.line([(ox, oy), (ox + sx*size, oy)], fill=color, width=lw)
        draw.line([(ox, oy), (ox, oy + sy*size)], fill=color, width=lw)
        # small dot
        draw.ellipse([ox-2, oy-2, ox+2, oy+2], fill=color)

def draw_dotted_border(draw, w, h, margin, color, step=12):
    for x in range(margin, w-margin, step):
        draw.ellipse([x-1, margin-1, x+1, margin+1], fill=color)
        draw.ellipse([x-1, h-margin-1, x+1, h-margin+1], fill=color)
    for y in range(margin, h-margin, step):
        draw.ellipse([margin-1, y-1, margin+1, y+1], fill=color)
        draw.ellipse([w-margin-1, y-1, w-margin+1, y+1], fill=color)

def draw_rect_border(draw, w, h, margin, color, lw=1):
    draw.rectangle([margin, margin, w-margin, h-margin], outline=color, width=lw)

# ─── Shield polygon helper ────────────────────────────────────────────────────
def shield_poly(cx, cy, sw, sh):
    """
    Returns a heraldic shield polygon centred at (cx, cy).
    sw = half-width, sh = half-height (tip is at cy+sh).
    """
    top_y    = cy - sh
    mid_y    = cy - sh//4
    bot_y    = cy + sh
    left_x   = cx - sw
    right_x  = cx + sw
    return [
        (left_x,  top_y),
        (right_x, top_y),
        (right_x, mid_y),
        (cx,      bot_y),
        (left_x,  mid_y),
    ]

def draw_shield_gradient(draw, cx, cy, sw, sh, col_top, col_bot):
    """Fill shield with simulated gradient using horizontal bands."""
    top_y = cy - sh
    bot_y = cy + sh
    for y in range(top_y, bot_y + 1):
        t = (y - top_y) / max(bot_y - top_y, 1)
        color = lerp_color(col_top, col_bot, t)
        # Compute left/right edges of shield at this y
        if y <= cy - sh//4:
            # Straight sides
            draw.line([(cx - sw, y), (cx + sw, y)], fill=color)
        else:
            # Converging to tip
            progress = (y - (cy - sh//4)) / (sh + sh//4)
            half_w = int(sw * (1 - progress))
            draw.line([(cx - half_w, y), (cx + half_w, y)], fill=color)

# ─── Central symbol shapes ────────────────────────────────────────────────────
def draw_diamond(draw, cx, cy, size, color, lw=2):
    pts = [(cx, cy-size), (cx+size, cy), (cx, cy+size), (cx-size, cy)]
    draw.polygon(pts, fill=color)
    draw.polygon(pts, outline=color, width=lw)

def draw_eye(draw, cx, cy, rx, ry, color, pupil):
    draw.ellipse([cx-rx, cy-ry, cx+rx, cy+ry], fill=color)
    pr = min(rx, ry) // 2
    draw.ellipse([cx-pr, cy-pr, cx+pr, cy+pr], fill=pupil)

def draw_wheel(draw, cx, cy, r, color, spokes=8, lw=2):
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=color, width=lw*2)
    ir = r // 3
    draw.ellipse([cx-ir, cy-ir, cx+ir, cy+ir], fill=color)
    for i in range(spokes):
        angle = math.radians(i * 360 / spokes)
        x2 = cx + int(r * math.cos(angle))
        y2 = cy + int(r * math.sin(angle))
        draw.line([(cx, cy), (x2, y2)], fill=color, width=lw)

def draw_axe(draw, cx, cy, size, color, lw=2):
    # Handle
    draw.rectangle([cx-3, cy-size, cx+3, cy+size], fill=color)
    # Blade
    blade = [(cx, cy-size), (cx+size//2, cy-size+size//3), (cx, cy-size//3)]
    draw.polygon(blade, fill=color)
    # Crescent on other side
    draw.arc([cx-size//2, cy-size//2, cx, cy+size//2], start=90, end=270, fill=color, width=lw*2)

def draw_rising_sun(draw, cx, cy, r, color, rays=8, lw=2):
    draw.ellipse([cx-r//2, cy-r//2, cx+r//2, cy+r//2], fill=color)
    for i in range(rays):
        angle = math.radians(i * 360 / rays)
        x1 = cx + int((r//2 + 4) * math.cos(angle))
        y1 = cy + int((r//2 + 4) * math.sin(angle))
        x2 = cx + int(r * math.cos(angle))
        y2 = cy + int(r * math.sin(angle))
        draw.line([(x1, y1), (x2, y2)], fill=color, width=lw)

def draw_fish(draw, cx, cy, size, color, lw=2):
    # Body ellipse
    draw.ellipse([cx-size, cy-size//3, cx+size//2, cy+size//3], fill=color)
    # Tail
    tail = [(cx-size, cy), (cx-size-size//2, cy-size//2), (cx-size-size//2, cy+size//2)]
    draw.polygon(tail, fill=color)

def draw_crescent_sword(draw, cx, cy, r, color, lw=2):
    # Crescent
    draw.arc([cx-r, cy-r, cx+r, cy+r], start=30, end=150, fill=color, width=lw*3)
    # Sword blade
    draw.rectangle([cx-3, cy-r, cx+3, cy+r-10], fill=color)
    draw.polygon([(cx-3, cy+r-10), (cx+3, cy+r-10), (cx, cy+r+10)], fill=color)
    # Guard
    draw.rectangle([cx-r//3, cy-5, cx+r//3, cy+5], fill=color)

def draw_trident(draw, cx, cy, r, color, lw=3):
    # Handle
    draw.rectangle([cx-3, cy-r, cx+3, cy+r], fill=color)
    # Prongs
    draw.line([(cx, cy-r), (cx, cy-r-20)], fill=color, width=lw)
    draw.line([(cx-r//3, cy-r+10), (cx-r//3, cy-r-10)], fill=color, width=lw)
    draw.line([(cx+r//3, cy-r+10), (cx+r//3, cy-r-10)], fill=color, width=lw)
    # Waves
    for i in range(3):
        y = cy + r//4 + i*10
        draw.arc([cx-r//2, y-8, cx+r//2, y+8], start=0, end=180, fill=color, width=lw)

def draw_lion_gate(draw, cx, cy, size, color, lw=2):
    # Gate arch
    draw.arc([cx-size, cy-size, cx+size, cy], start=0, end=180, fill=color, width=lw*2)
    draw.line([(cx-size, cy-size//2), (cx-size, cy+size//2)], fill=color, width=lw*2)
    draw.line([(cx+size, cy-size//2), (cx+size, cy+size//2)], fill=color, width=lw*2)
    # Lion head (simplified)
    draw.ellipse([cx-size//3, cy-size-size//3, cx+size//3, cy-size+size//3], fill=color)
    # Mane rays
    for angle_deg in range(0, 360, 45):
        a = math.radians(angle_deg)
        x2 = cx + int((size//3 + 8) * math.cos(a))
        y2 = (cy - size) + int((size//3 + 8) * math.sin(a))
        draw.line([(cx, cy-size), (x2, y2)], fill=color, width=lw)

def draw_mountain_tiger(draw, cx, cy, size, color, lw=2):
    # Mountains
    pts = [(cx-size, cy+size//4), (cx-size//3, cy-size//2),
           (cx, cy+size//8), (cx+size//3, cy-size),
           (cx+size, cy+size//4)]
    draw.polygon(pts, outline=color, width=lw)
    # Tiger stripes (3 lines)
    for i in range(3):
        x_off = -size//3 + i*(size//3)
        draw.line([(cx+x_off, cy-size//6), (cx+x_off+10, cy+size//3)], fill=color, width=lw)

def draw_chakra(draw, cx, cy, r, color, lw=2):
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=color, width=lw*2)
    draw.ellipse([cx-r//3, cy-r//3, cx+r//3, cy+r//3], fill=color)
    for i in range(24):
        angle = math.radians(i * 15)
        x1 = cx + int((r//3+2) * math.cos(angle))
        y1 = cy + int((r//3+2) * math.sin(angle))
        x2 = cx + int((r-2) * math.cos(angle))
        y2 = cy + int((r-2) * math.sin(angle))
        draw.line([(x1, y1), (x2, y2)], fill=color, width=1)

def draw_mangrove(draw, cx, cy, size, color, lw=2):
    # Tree trunk
    draw.rectangle([cx-4, cy, cx+4, cy+size//2], fill=color)
    # Branches
    for i in range(3):
        bx = cx - size//3 + i*size//3
        by = cy - i*size//5
        draw.line([(cx, cy), (bx, by)], fill=color, width=lw)
    # Roots (mangrove prop roots)
    for i in range(5):
        rx = cx - size//2 + i*size//4
        draw.line([(cx, cy+size//4), (rx, cy+size//2)], fill=color, width=lw)
    # Waves
    draw.arc([cx-size//2, cy+size//2-5, cx+size//2, cy+size//2+15], 0, 180, fill=color, width=lw)

def draw_vajra(draw, cx, cy, size, color, lw=2):
    # Central bar
    draw.rectangle([cx-5, cy-size, cx+5, cy+size], fill=color)
    # Prongs top
    for dx in [-size//3, 0, size//3]:
        draw.line([(cx, cy-size), (cx+dx, cy-size-size//3)], fill=color, width=lw*2)
    # Prongs bottom
    for dx in [-size//3, 0, size//3]:
        draw.line([(cx, cy+size), (cx+dx, cy+size+size//3)], fill=color, width=lw*2)
    # Lightning bolt
    pts = [(cx-size//4, cy-size//2), (cx+size//6, cy-size//6),
           (cx-size//6, cy+size//6), (cx+size//4, cy+size//2)]
    draw.line(pts, fill=color, width=lw*2)

def draw_flame_forest(draw, cx, cy, size, color, lw=2):
    # Trees
    for dx in [-size//3, 0, size//3]:
        tx = cx + dx
        ty = cy + size//4
        draw.polygon([(tx-size//6, ty), (tx, ty-size//2), (tx+size//6, ty)], fill=color)
    # Flame
    flame_pts = [(cx-size//5, cy+size//4), (cx, cy-size//2), (cx+size//5, cy+size//4)]
    draw.polygon(flame_pts, fill=color)
    inner_pts = [(cx-size//10, cy+size//4-5), (cx, cy-size//3), (cx+size//10, cy+size//4-5)]
    draw.polygon(inner_pts, fill=(255, 160, 50))

def draw_snowflake(draw, cx, cy, r, color, lw=2):
    for i in range(6):
        angle = math.radians(i * 60)
        x2 = cx + int(r * math.cos(angle))
        y2 = cy + int(r * math.sin(angle))
        draw.line([(cx, cy), (x2, y2)], fill=color, width=lw)
        # sub-branches
        for t in [0.4, 0.7]:
            bx = cx + int(r * t * math.cos(angle))
            by = cy + int(r * t * math.sin(angle))
            for da in [60, -60]:
                a2 = math.radians(i * 60 + da)
                bx2 = bx + int(r * 0.2 * math.cos(a2))
                by2 = by + int(r * 0.2 * math.sin(a2))
                draw.line([(bx, by), (bx2, by2)], fill=color, width=lw)

def draw_throne_lotus(draw, cx, cy, size, color, lw=2):
    # Throne back
    draw.rectangle([cx-size//2, cy-size, cx+size//2, cy+size//2], outline=color, width=lw)
    # Seat
    draw.rectangle([cx-size//2-5, cy+size//4, cx+size//2+5, cy+size//2], fill=color)
    # Lotus petals
    for i in range(5):
        angle = math.radians(i * 72 - 90)
        px = cx + int((size//3) * math.cos(angle))
        py = (cy - size//2) + int((size//3) * math.sin(angle))
        draw.ellipse([px-8, py-12, px+8, py+12], outline=color, width=lw)

def draw_mountain_star(draw, cx, cy, size, color, lw=2):
    # Mountains
    pts = [(cx-size, cy+size//4), (cx, cy-size//2), (cx+size, cy+size//4)]
    draw.polygon(pts, outline=color, width=lw)
    # Star above peak
    star_pts = []
    for i in range(10):
        angle = math.radians(i * 36 - 90)
        r = size//4 if i % 2 else size//8
        star_pts.append((cx + int(r * math.cos(angle)), (cy - size//2) + int(r * math.sin(angle))))
    draw.polygon(star_pts, fill=color)

def draw_battlefield_bow(draw, cx, cy, size, color, lw=2):
    # Bow arc
    draw.arc([cx-size, cy-size, cx+size, cy+size], start=45, end=135, fill=color, width=lw*3)
    # String
    draw.line([(cx-size+8, cy-size//2), (cx+size-8, cy-size//2)], fill=color, width=lw)
    # Arrow
    draw.line([(cx, cy-size//2), (cx, cy+size//2)], fill=color, width=lw*2)
    draw.polygon([(cx-8, cy-size//2+20), (cx+8, cy-size//2+20), (cx, cy-size//2)], fill=color)
    # Battlefield lines
    for i in range(-2, 3):
        draw.line([(cx-size+20+i*8, cy+size//3), (cx+size-20+i*8, cy+size//2)],
                  fill=color, width=lw)

def draw_five_rivers(draw, cx, cy, size, color, lw=2):
    for i in range(5):
        offset = -size//2 + i * size//4
        y_off = offset // 3
        draw.arc([cx+offset-12, cy-size//3+y_off, cx+offset+12, cy+size//3+y_off],
                 start=0, end=180, fill=color, width=lw*2)

def draw_rising_sun_eagle(draw, cx, cy, size, color, lw=2):
    # Sun
    draw.ellipse([cx-size//4, cy-size//2, cx+size//4, cy], fill=color)
    # Eagle wings
    draw.arc([cx-size, cy-size//4, cx, cy+size//4], start=200, end=340, fill=color, width=lw*3)
    draw.arc([cx, cy-size//4, cx+size, cy+size//4], start=200, end=340, fill=color, width=lw*3)
    # Eagle body
    draw.ellipse([cx-size//6, cy-size//6, cx+size//6, cy+size//3], fill=color)

def draw_hidden_valley(draw, cx, cy, size, color, lw=2):
    # Valley curves
    draw.arc([cx-size, cy-size//4, cx+size, cy+size*2], start=200, end=340, fill=color, width=lw*2)
    # Orchid
    for angle_deg in range(0, 360, 72):
        angle = math.radians(angle_deg)
        px = cx + int(size//3 * math.cos(angle))
        py = (cy - size//3) + int(size//3 * math.sin(angle))
        draw.ellipse([px-8, py-12, px+8, py+12], fill=color)
    # Centre
    draw.ellipse([cx-6, cy-size//3-6, cx+6, cy-size//3+6], fill=(255, 220, 180))

def draw_valley_lily(draw, cx, cy, size, color, lw=2):
    # Lily petals
    for angle_deg in range(0, 360, 60):
        angle = math.radians(angle_deg)
        px = cx + int(size//2 * math.cos(angle))
        py = cy + int(size//2 * math.sin(angle))
        draw.ellipse([px-10, py-16, px+10, py+16], outline=color, width=lw)
    # Centre
    draw.ellipse([cx-10, cy-10, cx+10, cy+10], fill=color)
    # Warrior spear
    draw.line([(cx-size//2, cy+size//2), (cx+size//3, cy-size)], fill=color, width=lw*2)
    draw.polygon([(cx+size//3-5, cy-size), (cx+size//3+5, cy-size), (cx+size//3, cy-size-12)], fill=color)

def draw_goddess_sword(draw, cx, cy, size, color, lw=2):
    # Goddess outline (simplified)
    draw.ellipse([cx-size//5, cy-size, cx+size//5, cy-size//2], outline=color, width=lw)
    draw.polygon([(cx-size//4, cy-size//2), (cx+size//4, cy-size//2),
                  (cx+size//6, cy+size//4), (cx-size//6, cy+size//4)], outline=color, width=lw)
    # Sword
    draw.line([(cx+size//3, cy-size), (cx+size//3, cy+size//2)], fill=color, width=lw*2)
    draw.polygon([(cx+size//3-5, cy+size//2-10), (cx+size//3+5, cy+size//2-10),
                  (cx+size//3, cy+size//2+10)], fill=color)

def draw_cloud_rain(draw, cx, cy, size, color, lw=2):
    # Cloud
    draw.ellipse([cx-size//2, cy-size//3, cx, cy+size//6], fill=color)
    draw.ellipse([cx-size//3, cy-size//2, cx+size//4, cy+size//6], fill=color)
    draw.ellipse([cx-size//4, cy-size//3, cx+size//2, cy+size//3], fill=color)
    # Rain drops
    for i in range(5):
        rx = cx - size//2 + i*size//4 - 10
        draw.line([(rx, cy+size//3), (rx-5, cy+size//2+10)], fill=color, width=lw)

def draw_dancing_deer(draw, cx, cy, size, color, lw=2):
    # Body
    draw.ellipse([cx-size//3, cy-size//4, cx+size//3, cy+size//4], outline=color, width=lw)
    # Head
    draw.ellipse([cx+size//4, cy-size//2, cx+size//2, cy-size//4], outline=color, width=lw)
    # Antlers
    draw.line([(cx+size//3, cy-size//2), (cx+size//4, cy-size*3//4)], fill=color, width=lw)
    draw.line([(cx+size//3, cy-size//2), (cx+size//2, cy-size*3//4)], fill=color, width=lw)
    # Legs (dancing pose — two lifted)
    draw.line([(cx-size//4, cy+size//4), (cx-size//3, cy+size//2)], fill=color, width=lw)
    draw.line([(cx, cy+size//4), (cx+size//6, cy+size//2-5)], fill=color, width=lw)  # raised
    draw.line([(cx+size//6, cy+size//4), (cx+size//4, cy+size//2)], fill=color, width=lw)
    # Polo stick
    draw.line([(cx-size//2, cy), (cx+size//4, cy-size//4)], fill=color, width=lw*2)

def draw_bamboo_mountain(draw, cx, cy, size, color, lw=2):
    # Mountains
    pts = [(cx-size, cy+size//4), (cx-size//4, cy-size//2),
           (cx, cy+size//8), (cx+size//4, cy-size*3//4), (cx+size, cy+size//4)]
    draw.polygon(pts, outline=color, width=lw)
    # Bamboo stalks
    for dx in [-size//3, 0, size//3]:
        draw.rectangle([cx+dx-4, cy-size//4, cx+dx+4, cy+size//2], outline=color, width=lw)
        for node_y in range(cy-size//5, cy+size//2, 15):
            draw.line([(cx+dx-4, node_y), (cx+dx+4, node_y)], fill=color, width=1)

def draw_agarwood_crown(draw, cx, cy, size, color, lw=2):
    # Crown base
    draw.rectangle([cx-size//2, cy, cx+size//2, cy+size//3], outline=color, width=lw)
    # Crown points
    for i in range(5):
        px = cx - size//2 + i*size//4
        draw.polygon([(px, cy), (px+size//8, cy-size//3), (px+size//4, cy)], fill=color)
    # Agarwood (wood grain lines)
    for i in range(3):
        x0 = cx - size//3 + i*8
        x1 = cx + size//3 - i*8
        if x1 <= x0:
            x1 = x0 + 4
        draw.arc([x0, cy-size//2, x1, cy],
                 start=30, end=150, fill=color, width=lw)

def draw_forest_spear(draw, cx, cy, size, color, lw=2):
    # Trees
    for dx in [-size//2, 0, size//2]:
        draw.polygon([(cx+dx-size//6, cy+size//4), (cx+dx, cy-size//3),
                      (cx+dx+size//6, cy+size//4)], fill=color)
    # Spear
    draw.line([(cx, cy-size*3//4), (cx, cy+size*3//4)], fill=color, width=lw*3)
    draw.polygon([(cx-size//8, cy-size//2), (cx+size//8, cy-size//2),
                  (cx, cy-size*3//4-10)], fill=color)

def draw_heart_banyan(draw, cx, cy, size, color, lw=2):
    # Heart
    draw.arc([cx-size//2, cy-size//2, cx, cy], start=0, end=180, fill=color, width=lw*2)
    draw.arc([cx, cy-size//2, cx+size//2, cy], start=0, end=180, fill=color, width=lw*2)
    draw.polygon([(cx-size//2, cy), (cx, cy+size//2), (cx+size//2, cy)], outline=color, width=lw)
    # Banyan roots
    for i in range(5):
        rx = cx - size//2 + i*size//4
        draw.line([(rx, cy+size//4), (rx+(-2+i)*3, cy+size//2)], fill=color, width=lw)

# ─── Map symbol name → draw function ─────────────────────────────────────────
SYMBOL_FUNCTIONS = {
    "diamond_eye":     lambda d, cx, cy, sz, col: (
        draw_diamond(d, cx, cy, sz, col),
        draw_eye(d, cx, cy, sz//3, sz//5, col, (0, 0, 0))
    ),
    "dharma_wheel":    lambda d, cx, cy, sz, col: draw_wheel(d, cx, cy, sz, col, 12),
    "axe_crescent":    lambda d, cx, cy, sz, col: draw_axe(d, cx, cy, sz, col),
    "rising_sun_fish": lambda d, cx, cy, sz, col: (
        draw_rising_sun(d, cx, cy, sz, col, 8),
        draw_fish(d, cx+sz//2, cy+sz//3, sz//3, col)
    ),
    "crescent_sword":  lambda d, cx, cy, sz, col: draw_crescent_sword(d, cx, cy, sz, col),
    "trident_wave":    lambda d, cx, cy, sz, col: draw_trident(d, cx, cy, sz, col),
    "lion_gate":       lambda d, cx, cy, sz, col: draw_lion_gate(d, cx, cy, sz, col),
    "mountain_tiger":  lambda d, cx, cy, sz, col: draw_mountain_tiger(d, cx, cy, sz, col),
    "chakra_wheel":    lambda d, cx, cy, sz, col: draw_chakra(d, cx, cy, sz, col),
    "mangrove_river":  lambda d, cx, cy, sz, col: draw_mangrove(d, cx, cy, sz, col),
    "vajra_lightning": lambda d, cx, cy, sz, col: draw_vajra(d, cx, cy, sz, col),
    "flame_forest":    lambda d, cx, cy, sz, col: draw_flame_forest(d, cx, cy, sz, col),
    "snowflake_peak":  lambda d, cx, cy, sz, col: draw_snowflake(d, cx, cy, sz, col),
    "throne_lotus":    lambda d, cx, cy, sz, col: draw_throne_lotus(d, cx, cy, sz, col),
    "mountain_star":   lambda d, cx, cy, sz, col: draw_mountain_star(d, cx, cy, sz, col),
    "battlefield_bow": lambda d, cx, cy, sz, col: draw_battlefield_bow(d, cx, cy, sz, col),
    "five_rivers":     lambda d, cx, cy, sz, col: draw_five_rivers(d, cx, cy, sz, col),
    "rising_sun_eagle":lambda d, cx, cy, sz, col: draw_rising_sun_eagle(d, cx, cy, sz, col),
    "hidden_valley":   lambda d, cx, cy, sz, col: draw_hidden_valley(d, cx, cy, sz, col),
    "valley_lily":     lambda d, cx, cy, sz, col: draw_valley_lily(d, cx, cy, sz, col),
    "goddess_sword":   lambda d, cx, cy, sz, col: draw_goddess_sword(d, cx, cy, sz, col),
    "cloud_rain":      lambda d, cx, cy, sz, col: draw_cloud_rain(d, cx, cy, sz, col),
    "dancing_deer":    lambda d, cx, cy, sz, col: draw_dancing_deer(d, cx, cy, sz, col),
    "bamboo_mountain": lambda d, cx, cy, sz, col: draw_bamboo_mountain(d, cx, cy, sz, col),
    "agarwood_crown":  lambda d, cx, cy, sz, col: draw_agarwood_crown(d, cx, cy, sz, col),
    "forest_spear":    lambda d, cx, cy, sz, col: draw_forest_spear(d, cx, cy, sz, col),
    "heart_banyan":    lambda d, cx, cy, sz, col: draw_heart_banyan(d, cx, cy, sz, col),
}

# ─── Kingdom data ─────────────────────────────────────────────────────────────
KINGDOMS = [
    # SOUTH ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "South",
        "kingdom": "Chaya-Golkonda",
        "emblem_path": "south/chaya-golkonda/media/emblem/chaya-golkonda-royal-emblem.png",
        "portrait_path": "south/chaya-golkonda/media/portraits/chaya-golkonda-hero-portrait.png",
        "bg":      "#1a1a0a",
        "primary": "#8B6914",
        "accent":  "#d4a017",
        "symbol":  "diamond_eye",
        "hero":    "Chittaranga",
        "title":   "The Spotted Blade",
    },
    {
        "region": "South",
        "kingdom": "Dharmakshetra Amaravati",
        "emblem_path": "south/dharmakshetra-amaravati/media/emblem/dharmakshetra-amaravati-royal-emblem.png",
        "portrait_path": "south/dharmakshetra-amaravati/media/portraits/dharmakshetra-amaravati-hero-portrait.png",
        "bg":      "#0a1a0a",
        "primary": "#1a6a3a",
        "accent":  "#44cc88",
        "symbol":  "dharma_wheel",
        "hero":    "Krishnaveni",
        "title":   "The River's Daughter",
    },
    {
        "region": "South",
        "kingdom": "Parashurama-Kshetra",
        "emblem_path": "south/parashurama-kshetra/media/emblem/parashurama-kshetra-royal-emblem.png",
        "portrait_path": "south/parashurama-kshetra/media/portraits/parashurama-kshetra-hero-portrait.png",
        "bg":      "#0a1a14",
        "primary": "#1a8a4a",
        "accent":  "#44ffaa",
        "symbol":  "axe_crescent",
        "hero":    "Parashurama",
        "title":   "The Axe Reborn",
    },
    {
        "region": "South",
        "kingdom": "Sangam Tamilakam",
        "emblem_path": "south/sangam-tamilakam/media/emblem/sangam-tamilakam-royal-emblem.png",
        "portrait_path": "south/sangam-tamilakam/media/portraits/sangam-tamilakam-hero-portrait.png",
        "bg":      "#1a0a0a",
        "primary": "#8a1a1a",
        "accent":  "#ff6644",
        "symbol":  "rising_sun_fish",
        "hero":    "Kurinjiselvi",
        "title":   "The Mountain Bloom",
    },

    # WEST ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "West",
        "kingdom": "Maru-Maya",
        "emblem_path": "west/maru-maya/media/emblem/rajputana-reborn-royal-emblem.png",
        "portrait_path": "west/maru-maya/media/portraits/rajputana-reborn-hero-portrait.png",
        "bg":      "#1a1200",
        "primary": "#8a6000",
        "accent":  "#ffcc44",
        "symbol":  "crescent_sword",
        "hero":    "Mrigatrishna",
        "title":   "The Mirage Walker",
    },
    {
        "region": "West",
        "kingdom": "Samudra-Dvipa",
        "emblem_path": "west/samudra-dvipa/media/emblem/vasco-kshetra-royal-emblem.png",
        "portrait_path": "west/samudra-dvipa/media/portraits/vasco-kshetra-hero-portrait.png",
        "bg":      "#001a14",
        "primary": "#006a4a",
        "accent":  "#44ffcc",
        "symbol":  "trident_wave",
        "hero":    "Sagaradeva",
        "title":   "The Ocean's Chosen",
    },
    {
        "region": "West",
        "kingdom": "Simha-Dwara",
        "emblem_path": "west/simha-dwara/media/emblem/rann-utthan-royal-emblem.png",
        "portrait_path": "west/simha-dwara/media/portraits/rann-utthan-hero-portrait.png",
        "bg":      "#1a0a00",
        "primary": "#8a3a00",
        "accent":  "#ff8844",
        "symbol":  "lion_gate",
        "hero":    "Simhavikrama",
        "title":   "The Lion's Roar",
    },
    {
        "region": "West",
        "kingdom": "Swarajya Sahyadri",
        "emblem_path": "west/swarajya-sahyadri/media/emblem/sahyadri-kesari-royal-emblem.png",
        "portrait_path": "west/swarajya-sahyadri/media/portraits/sahyadri-kesari-hero-portrait.png",
        "bg":      "#1a0800",
        "primary": "#7a2000",
        "accent":  "#ff6600",
        "symbol":  "mountain_tiger",
        "hero":    "Shivagati",
        "title":   "The Mountain Dancer",
    },

    # EAST ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "East",
        "kingdom": "Kalinga-Chakra",
        "emblem_path": "east/kalinga-chakra/media/emblem/kalinga-reborn-royal-emblem.png",
        "portrait_path": "east/kalinga-chakra/media/portraits/kalinga-reborn-hero-portrait.png",
        "bg":      "#001020",
        "primary": "#1a4080",
        "accent":  "#4488ff",
        "symbol":  "chakra_wheel",
        "hero":    "Jagannathi",
        "title":   "The Wheel Bearer",
    },
    {
        "region": "East",
        "kingdom": "Sundara-Vana",
        "emblem_path": "east/sundara-vana/media/emblem/ganga-sundari-royal-emblem.png",
        "portrait_path": "east/sundara-vana/media/portraits/ganga-sundari-hero-portrait.png",
        "bg":      "#00100a",
        "primary": "#1a5a3a",
        "accent":  "#44ddaa",
        "symbol":  "mangrove_river",
        "hero":    "Sundarvani",
        "title":   "The Mangrove Keeper",
    },
    {
        "region": "East",
        "kingdom": "Vajra-Bhumi",
        "emblem_path": "east/vajra-bhumi/media/emblem/bodhi-kshetra-royal-emblem.png",
        "portrait_path": "east/vajra-bhumi/media/portraits/bodhi-kshetra-hero-portrait.png",
        "bg":      "#100010",
        "primary": "#4a1a6a",
        "accent":  "#aa66ff",
        "symbol":  "vajra_lightning",
        "hero":    "Vajramukha",
        "title":   "The Iron Face",
    },
    {
        "region": "East",
        "kingdom": "Vana-Agni",
        "emblem_path": "east/vana-agni/media/emblem/vananchal-royal-emblem.png",
        "portrait_path": "east/vana-agni/media/portraits/vananchal-hero-portrait.png",
        "bg":      "#100800",
        "primary": "#5a2a00",
        "accent":  "#ff8844",
        "symbol":  "flame_forest",
        "hero":    "Vanajara",
        "title":   "The Forest Born",
    },

    # NORTH ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "North",
        "kingdom": "Deva-Bhumi",
        "emblem_path": "north/deva-bhumi/media/emblem/devabhumi-royal-emblem.png",
        "portrait_path": "north/deva-bhumi/media/portraits/devabhumi-hero-portrait.png",
        "bg":      "#00080a",
        "primary": "#0a3a5a",
        "accent":  "#44aaff",
        "symbol":  "snowflake_peak",
        "hero":    "Kasturika",
        "title":   "The Musk Bearer",
    },
    {
        "region": "North",
        "kingdom": "Ganga-Simhasana",
        "emblem_path": "north/ganga-simhasana/media/emblem/ayodhya-kal-royal-emblem.png",
        "portrait_path": "north/ganga-simhasana/media/portraits/ayodhya-kal-hero-portrait.png",
        "bg":      "#0a0810",
        "primary": "#3a1a5a",
        "accent":  "#cc88ff",
        "symbol":  "throne_lotus",
        "hero":    "Gangaputra",
        "title":   "The Son of Ganga",
    },
    {
        "region": "North",
        "kingdom": "Hima-Chhaya",
        "emblem_path": "north/hima-chhaya/media/emblem/himalaya-durg-royal-emblem.png",
        "portrait_path": "north/hima-chhaya/media/portraits/himalaya-durg-hero-portrait.png",
        "bg":      "#000a14",
        "primary": "#1a3a6a",
        "accent":  "#88ccff",
        "symbol":  "mountain_star",
        "hero":    "Himavati",
        "title":   "The Snow's Daughter",
    },
    {
        "region": "North",
        "kingdom": "Kurukshetra-Bhoomi",
        "emblem_path": "north/kurukshetra-bhoomi/media/emblem/kurukshetra-reborn-royal-emblem.png",
        "portrait_path": "north/kurukshetra-bhoomi/media/portraits/kurukshetra-reborn-hero-portrait.png",
        "bg":      "#0a0800",
        "primary": "#4a3a00",
        "accent":  "#ccaa00",
        "symbol":  "battlefield_bow",
        "hero":    "Kurukshetraa",
        "title":   "The Battlefield Born",
    },
    {
        "region": "North",
        "kingdom": "Panch-Nada",
        "emblem_path": "north/panch-nada/media/emblem/panj-nadi-royal-emblem.png",
        "portrait_path": "north/panch-nada/media/portraits/panj-nadi-hero-portrait.png",
        "bg":      "#001008",
        "primary": "#1a5a2a",
        "accent":  "#44cc88",
        "symbol":  "five_rivers",
        "hero":    "Panchanada",
        "title":   "The Five Rivers' Son",
    },

    # NORTHEAST ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "Northeast",
        "kingdom": "Arunodaya-Kshetra",
        "emblem_path": "northeast/arunodaya-kshetra/media/emblem/arunodaya-royal-emblem.png",
        "portrait_path": "northeast/arunodaya-kshetra/media/portraits/arunodaya-hero-portrait.png",
        "bg":      "#100800",
        "primary": "#5a2000",
        "accent":  "#ff8844",
        "symbol":  "rising_sun_eagle",
        "hero":    "Udayagiri",
        "title":   "The Dawn Runner",
    },
    {
        "region": "Northeast",
        "kingdom": "Beyul-Kshetra",
        "emblem_path": "northeast/beyul-kshetra/media/emblem/denzong-royal-emblem.png",
        "portrait_path": "northeast/beyul-kshetra/media/portraits/denzong-hero-portrait.png",
        "bg":      "#080010",
        "primary": "#2a0050",
        "accent":  "#aa66ff",
        "symbol":  "hidden_valley",
        "hero":    "Kanchenjunga",
        "title":   "The Mountain's Voice",
    },
    {
        "region": "Northeast",
        "kingdom": "Dzukou-Rashtra",
        "emblem_path": "northeast/dzukou-rashtra/media/emblem/naga-kendra-royal-emblem.png",
        "portrait_path": "northeast/dzukou-rashtra/media/portraits/naga-kendra-hero-portrait.png",
        "bg":      "#001008",
        "primary": "#003a1a",
        "accent":  "#44ff88",
        "symbol":  "valley_lily",
        "hero":    "Dzulevira",
        "title":   "The Valley's Blade",
    },
    {
        "region": "Northeast",
        "kingdom": "Ganda-Kshetra",
        "emblem_path": "northeast/ganda-kshetra/media/emblem/kamakhya-durg-royal-emblem.png",
        "portrait_path": "northeast/ganda-kshetra/media/portraits/kamakhya-durg-hero-portrait.png",
        "bg":      "#100008",
        "primary": "#5a0030",
        "accent":  "#ff44aa",
        "symbol":  "goddess_sword",
        "hero":    "Kamalavarna",
        "title":   "The Lotus Shield",
    },
    {
        "region": "Northeast",
        "kingdom": "Megha-Maata",
        "emblem_path": "northeast/megha-maata/media/emblem/ri-bhoi-royal-emblem.png",
        "portrait_path": "northeast/megha-maata/media/portraits/ri-bhoi-hero-portrait.png",
        "bg":      "#001014",
        "primary": "#003a5a",
        "accent":  "#44aaff",
        "symbol":  "cloud_rain",
        "hero":    "Meghanadi",
        "title":   "The Cloud Keeper",
    },
    {
        "region": "Northeast",
        "kingdom": "Sangai-Nata",
        "emblem_path": "northeast/sangai-nata/media/emblem/kangleipak-royal-emblem.png",
        "portrait_path": "northeast/sangai-nata/media/portraits/kangleipak-hero-portrait.png",
        "bg":      "#0a0014",
        "primary": "#3a0060",
        "accent":  "#cc66ff",
        "symbol":  "dancing_deer",
        "hero":    "Moirangthem",
        "title":   "The Dancing Blade",
    },
    {
        "region": "Northeast",
        "kingdom": "Tlawmngaihna-Desh",
        "emblem_path": "northeast/tlawmngaihna-desh/media/emblem/tlang-ram-royal-emblem.png",
        "portrait_path": "northeast/tlawmngaihna-desh/media/portraits/tlang-ram-hero-portrait.png",
        "bg":      "#000a10",
        "primary": "#002040",
        "accent":  "#4488cc",
        "symbol":  "bamboo_mountain",
        "hero":    "Tlangvala",
        "title":   "The Duty Keeper",
    },
    {
        "region": "Northeast",
        "kingdom": "Tri-Pura",
        "emblem_path": "northeast/tri-pura/media/emblem/tripuri-kendra-royal-emblem.png",
        "portrait_path": "northeast/tri-pura/media/portraits/tripuri-kendra-hero-portrait.png",
        "bg":      "#100008",
        "primary": "#4a0030",
        "accent":  "#ff6688",
        "symbol":  "agarwood_crown",
        "hero":    "Tripurari",
        "title":   "The City Breaker",
    },

    # CENTRAL ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
    {
        "region": "Central",
        "kingdom": "Dandakaranya",
        "emblem_path": "central/dandakaranya/media/emblem/dandakaranya-royal-emblem.png",
        "portrait_path": "central/dandakaranya/media/portraits/dandakaranya-hero-portrait.png",
        "bg":      "#080a00",
        "primary": "#2a3a00",
        "accent":  "#88cc44",
        "symbol":  "forest_spear",
        "hero":    "Dandakarni",
        "title":   "The Forest's Daughter",
    },
    {
        "region": "Central",
        "kingdom": "Hridaya-Sthana",
        "emblem_path": "central/hridaya-sthana/media/emblem/hridaya-bharat-royal-emblem.png",
        "portrait_path": "central/hridaya-sthana/media/portraits/hridaya-bharat-hero-portrait.png",
        "bg":      "#0a0800",
        "primary": "#3a2800",
        "accent":  "#ccaa44",
        "symbol":  "heart_banyan",
        "hero":    "Dvadashashringa",
        "title":   "The Twelve-Antlered",
    },
]


# ─── Font loader ──────────────────────────────────────────────────────────────
def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

def text_width(draw, text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0]

def text_height(draw, text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[3] - bbox[1]

# ─── Emblem generator ─────────────────────────────────────────────────────────
def make_emblem(kd):
    W, H = 400, 480
    img = Image.new("RGB", (W, H))
    draw = ImageDraw.Draw(img)

    bg  = hex_to_rgb(kd["bg"])
    pri = hex_to_rgb(kd["primary"])
    acc = hex_to_rgb(kd["accent"])

    # Background
    bg_dark  = tuple(max(0, c - 15) for c in bg)
    bg_light = tuple(min(255, c + 20) for c in bg)
    draw_gradient_bg(draw, W, H, bg_dark, bg_light)

    # Outer decorative border
    draw_rect_border(draw, W, H, 6,  acc, lw=2)
    draw_rect_border(draw, W, H, 11, pri, lw=1)
    draw_dotted_border(draw, W, H, 18, acc, step=14)
    draw_corner_ornaments(draw, W, H, acc, size=22)

    # Shield
    cx, cy  = W // 2, H // 2 + 15
    sw, sh  = 130, 130
    shield_top = tuple(min(255, c + 60) for c in pri)
    shield_bot = tuple(max(0, c - 20)  for c in pri)
    draw_shield_gradient(draw, cx, cy, sw, sh, shield_top, shield_bot)
    # Shield outline
    draw.polygon(shield_poly(cx, cy, sw, sh), outline=acc, width=2)
    # Inner shield ring
    draw.polygon(shield_poly(cx, cy, sw-12, sh-12), outline=tuple(min(255, c+40) for c in acc), width=1)

    # Central symbol
    sym_fn = SYMBOL_FUNCTIONS.get(kd["symbol"])
    if sym_fn:
        sym_fn(draw, cx, cy, 42, acc)

    # Fonts
    font_title  = load_font(FONT_GEORGIA,    26)
    font_region = load_font(FONT_GEORGIA,    14)
    font_top    = load_font(FONT_ARIAL_BOLD, 15)

    # Kingdom name at top
    kname = kd["kingdom"].upper()
    tw = text_width(draw, kname, font_title)
    # Fit long names
    if tw > W - 30:
        font_title = load_font(FONT_GEORGIA, 18)
        tw = text_width(draw, kname, font_title)
    draw.text(((W - tw) // 2, 32), kname, fill=acc, font=font_title)

    # Thin rule under kingdom name
    rule_y = 32 + text_height(draw, kname, font_title) + 6
    draw.line([(40, rule_y), (W-40, rule_y)], fill=acc, width=1)

    # Region label at bottom
    region_text = kd["region"].upper() + " REGION"
    rw = text_width(draw, region_text, font_region)
    draw.text(((W - rw) // 2, H - 38), region_text, fill=acc, font=font_region)

    # Bottom rule
    draw.line([(40, H-42), (W-40, H-42)], fill=acc, width=1)

    return img


# ─── Portrait generator ───────────────────────────────────────────────────────
def make_portrait(kd):
    W, H = 400, 500
    img = Image.new("RGB", (W, H))
    draw = ImageDraw.Draw(img)

    bg  = hex_to_rgb(kd["bg"])
    pri = hex_to_rgb(kd["primary"])
    acc = hex_to_rgb(kd["accent"])

    # Rich gradient background
    top_c = tuple(min(255, c + 30) for c in pri)
    bot_c = tuple(max(0,  c - 15) for c in bg)
    draw_gradient_bg(draw, W, H, top_c, bot_c)

    # Vignette effect (darken edges)
    for margin in range(0, 60, 8):
        darkness = 50 - margin
        vignette_col = tuple(max(0, c - darkness) for c in bg)
        draw.rectangle([margin, margin, W-margin, H-margin], outline=vignette_col, width=2)

    # Glowing aura circle behind warrior
    aura_cx, aura_cy = W // 2, H // 2 - 30
    for r_off in range(60, 0, -6):
        alpha = int(60 * (1 - r_off / 60))
        aura_col = tuple(min(255, c + alpha) for c in acc)
        draw.ellipse(
            [aura_cx - r_off - 50, aura_cy - r_off - 50,
             aura_cx + r_off + 50, aura_cy + r_off + 50],
            outline=aura_col, width=1
        )
    # Solid inner glow
    draw.ellipse([aura_cx-55, aura_cy-55, aura_cx+55, aura_cy+55],
                 fill=tuple(min(255, c + 25) for c in pri))

    # Warrior silhouette ─────────────────────────────────────────────────────
    wc_x, wc_y = W // 2, H // 2 - 20
    silhouette = tuple(min(255, c + 50) for c in pri)
    dark_sil   = tuple(max(0, c - 10)  for c in bg)

    # Shadow / ground
    draw.ellipse([wc_x-55, wc_y+130, wc_x+55, wc_y+155],
                 fill=tuple(max(0, c-5) for c in bg))

    # Legs
    draw.rectangle([wc_x-22, wc_y+70, wc_x-6,  wc_y+140], fill=silhouette)
    draw.rectangle([wc_x+6,  wc_y+70, wc_x+22, wc_y+140], fill=silhouette)

    # Armour skirt/waist
    draw.polygon([(wc_x-30, wc_y+60), (wc_x+30, wc_y+60),
                  (wc_x+25, wc_y+90), (wc_x-25, wc_y+90)], fill=silhouette)

    # Torso
    draw.rectangle([wc_x-28, wc_y-20, wc_x+28, wc_y+65], fill=silhouette)

    # Chest armour highlight
    draw.rectangle([wc_x-22, wc_y-15, wc_x+22, wc_y+30],
                   fill=tuple(min(255, c+40) for c in silhouette))

    # Shoulders (pauldrons)
    draw.ellipse([wc_x-48, wc_y-30, wc_x-14, wc_y+10], fill=silhouette)
    draw.ellipse([wc_x+14, wc_y-30, wc_x+48, wc_y+10], fill=silhouette)

    # Arms
    draw.rectangle([wc_x-48, wc_y-10, wc_x-28, wc_y+50], fill=silhouette)
    draw.rectangle([wc_x+28, wc_y-10, wc_x+48, wc_y+50], fill=silhouette)

    # Head
    draw.ellipse([wc_x-22, wc_y-80, wc_x+22, wc_y-30], fill=silhouette)

    # Helmet crest
    draw.polygon([(wc_x-20, wc_y-78), (wc_x, wc_y-105), (wc_x+20, wc_y-78)],
                 fill=acc)

    # Eyes glow
    draw.ellipse([wc_x-12, wc_y-62, wc_x-5, wc_y-55], fill=acc)
    draw.ellipse([wc_x+5,  wc_y-62, wc_x+12, wc_y-55], fill=acc)

    # Weapon — spear / sword diagonal in right hand
    spear_x1, spear_y1 = wc_x+38, wc_y-110
    spear_x2, spear_y2 = wc_x+70, wc_y+160
    draw.line([(spear_x1, spear_y1), (spear_x2, spear_y2)], fill=acc, width=4)
    # Spear tip
    draw.polygon([
        (spear_x1-6, spear_y1+10), (spear_x1+6, spear_y1+10),
        (spear_x1,   spear_y1-15)
    ], fill=acc)

    # Shield in left hand
    shield_x, shield_y = wc_x - 65, wc_y + 10
    draw.ellipse([shield_x-22, shield_y-30, shield_x+22, shield_y+30],
                 fill=silhouette, outline=acc, width=2)
    # Shield boss
    draw.ellipse([shield_x-6, shield_y-6, shield_x+6, shield_y+6], fill=acc)

    # Cloak / cape
    cloak_col = tuple(max(0, c - 30) for c in silhouette)
    draw.polygon([
        (wc_x-28, wc_y-15),
        (wc_x-55, wc_y+100),
        (wc_x-35, wc_y+130),
        (wc_x-20, wc_y+65),
    ], fill=cloak_col)

    # Decorative border
    draw_rect_border(draw, W, H, 8,  acc, lw=2)
    draw_rect_border(draw, W, H, 14, pri, lw=1)
    draw_corner_ornaments(draw, W, H, acc, size=20)

    # Text ───────────────────────────────────────────────────────────────────
    font_kingdom = load_font(FONT_GEORGIA,    13)
    font_hero    = load_font(FONT_ARIAL_BOLD, 28)
    font_title_f = load_font(FONT_TNR,        16)

    # Kingdom name top-left
    draw.text((20, 18), kd["kingdom"], fill=acc, font=font_kingdom)

    # Hero name bottom
    hname = kd["hero"].upper()
    hw = text_width(draw, hname, font_hero)
    if hw > W - 30:
        font_hero = load_font(FONT_ARIAL_BOLD, 20)
        hw = text_width(draw, hname, font_hero)
    hero_y = H - 72
    draw.text(((W - hw) // 2, hero_y), hname, fill=acc, font=font_hero)

    # Decorative line above hero name
    draw.line([(30, hero_y - 6), (W-30, hero_y - 6)], fill=acc, width=1)

    # Title / epithet italic
    title_text = kd["title"]
    tw = text_width(draw, title_text, font_title_f)
    draw.text(((W - tw) // 2, H - 40), title_text, fill=tuple(min(255, c+80) for c in acc),
              font=font_title_f)

    return img


# ─── Main generation loop ─────────────────────────────────────────────────────
def main():
    created = 0
    failed  = []

    for kd in KINGDOMS:
        for kind in ("emblem", "portrait"):
            rel_path = kd["emblem_path"] if kind == "emblem" else kd["portrait_path"]
            full_path = os.path.join(BASE, rel_path)

            os.makedirs(os.path.dirname(full_path), exist_ok=True)

            try:
                if kind == "emblem":
                    img = make_emblem(kd)
                else:
                    img = make_portrait(kd)

                img.save(full_path, "PNG")
                created += 1
                print(f"  [OK] {rel_path}")
            except Exception as e:
                print(f"  [FAIL] {rel_path}: {e}")
                failed.append((rel_path, str(e)))

    print(f"\n{'='*60}")
    print(f"Created : {created} / 54")
    print(f"Failed  : {len(failed)}")
    if failed:
        for p, e in failed:
            print(f"   - {p}: {e}")


if __name__ == "__main__":
    main()
