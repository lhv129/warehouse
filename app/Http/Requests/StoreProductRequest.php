<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:products,name',
            'category_id' => 'required',
            'unit_id' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'entry_price' => 'required|min:0',
            'retail_price' => 'required|min:0',
            'slug' => 'required|unique:products,slug',
        ];
    }

    public function messages()
    {
        return [
            'required' => ':Attribute của sản phẩm không được để trống',
            'name.unique' => 'Tên sản phẩm này đã có, vui lòng nhập tên khác',
            'slug.required' => 'Slug của sản phẩm không được để trống',
            'slug.unique' => 'Slug của sản phẩm này đã có, vui lòng nhập tên khác',
            'entry_price.min' => 'Giá nhập phải lớn hơn hoặc bằng 0.',
            'retail_price.min' => 'Giá bán lẻ phải lớn hơn hoặc bằng 0.',
            'image.required' => 'Vui lòng chọn ảnh sản phẩm.',
            'image.image' => 'File tải lên phải là ảnh.',
            'image.mimes' => 'Ảnh phải có định dạng: jpeg, png, jpg, gif, svg.',
        ];
    }
}
